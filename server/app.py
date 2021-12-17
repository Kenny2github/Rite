from functools import partial
import os
import time
import json
import asyncio
import re
from typing import Mapping, Optional
from aiohttp import web
from attr import dataclass
from google.cloud import vision

os.chdir(os.path.dirname(__file__))

with open('config.json') as f:
    config = json.load(f)

### regexes ###

TOTAL_RE = re.compile(
    r"(s[ou]b-?|ne[t71]\s+)?([[jf17t\]]?\s*[oun0]\s*[tf7]\s*[4a]\s*[17li)_]?)\W*?([0-9]+\s*[.,'][0-9\s]+)\W*$",
    re.I | re.M)
TAX_RE = re.compile(r"(H[GS]T|Tax\W*H?)\W*([0-9]+\s*[.,'][0-9\s]+)$", re.I | re.M)

CATEGORIES = {
    'Other': re.compile(r"^(?!x)x", re.I),
    'Snacks': re.compile(r"(cookie|cand(y|ies)|snack|chip|dorito|ruffle)", re.I | re.M),
    'Restaurant': re.compile(r"(restaurant|eater(y|ies)|food|mcdonald|kfc)", re.I | re.M),
    'Clothes': re.compile(r"(sock|walk|winner|wear|lace|glove|uniqlo|pant|shirt|shoe|heel|jacket|coat)", re.I | re.M),
    'Gadgets': re.compile(r"(best buy|outlet|comp|tech|keyb|mouse|head)", re.I | re.M),
    'Tools': re.compile(r"(laundry|screw|nail|hammer|drill|ax|shovel)", re.I | re.M),
    'Entertainment': re.compile(r"(nintendo|epic|xbox|play|game|entertain)", re.I | re.M)
}

METHODS = {
    'Cash': re.compile(r"(cash|cdn|change|tend)", re.I | re.M),
    'Debit Card/Interac': re.compile(r"(debit|interac)", re.I | re.M),
    'Visa Card': re.compile(r"(credit)", re.I | re.M)
}

### text processing code ###

@dataclass
class ReceiptData:
    """Receipt data to be returned."""
    total: Optional[float] = None
    spending_category: Optional[str] = None
    payment_method: Optional[str] = None

def num(s: str) -> str:
    """Parse a floating point string, potentially with noise."""
    return re.sub("[',]", '.', re.sub(r'\s', '', s))

def max_from_match(text: str, res: Mapping[str, re.Pattern]) -> Optional[str]:
    """Find the key of ``res`` referenced the most times in the text,
    where number of references is determined by the regex values.
    """
    count = 0
    result = None
    for const, regex in res.items():
        matches = list(regex.finditer(text))
        if not matches:
            continue # no matches, never counted
        c = len(matches)
        if c > count:
            count = c
            result = const
    return result

def extract_data(text: str) -> ReceiptData:
    """Extract the data from the text of the receipt."""
    result = ReceiptData()
    # find anything that looks like a "Total:" chunk
    potential_totals = list(TOTAL_RE.finditer(text))
    if potential_totals:
        # since the total always comes after the subtotals, assume it comes last
        potential_total = potential_totals[-1]
    else:
        potential_total = None
    if not potential_total:
        pass # literally nothing even looks like
    elif potential_total.group(1):
        # group 1 matches "sub" or "net" before "total";
        # if the last match was a sub-total, this is not the final total
        # group 3 matches the actual number
        subtotal = num(potential_total.group(3))
        # find anything that looks like "HST" or "Tax:"
        potential_taxes = list(TAX_RE.finditer(text))
        if potential_taxes:
            # like before, it should come last
            potential_tax = potential_taxes[-1]
            # group 2 matches the number
            tax = num(potential_tax.group(2))
            result.total = subtotal + tax
    else:
        result.total = num(potential_total.group(3))
    result.spending_category = max_from_match(text, CATEGORIES)
    result.payment_method = max_from_match(text, METHODS)
    return result

### server code ###

client: vision.ImageAnnotatorClient = vision.ImageAnnotatorClient \
    .from_service_account_json(config['json'])

routes = web.RouteTableDef()

cors_headers = {
    'Access-Control-Allow-Origin': config['cors-origin'],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
}

@routes.post('/api')
async def do_vision(request: web.Request):
    content = await request.content.read()
    img = vision.Image(content=content)
    # AsyncClient is missing this method for no good reason,
    # so run the blocking method in an executor
    func = partial(client.text_detection, image=img)
    response = await asyncio.get_event_loop().run_in_executor(None, func)
    if response.error.message:
        print(time.strftime('%Y-%m-%d %H:%M:%S'), response.error.message, sep='\t')
        raise web.HTTPBadGateway(text=response.error.message, headers=cors_headers)
    # first annotation is the full text
    text = response.text_annotations[0].description
    result = extract_data(text)
    return web.json_response(result.__dict__.copy(), headers=cors_headers)

@routes.route('OPTIONS', '/api')
async def vision_cors(request: web.Request):
    raise web.HTTPNoContent(headers=cors_headers)

app = web.Application()
app.add_routes(routes)
web.run_app(app)
