import Tesseract from 'tesseract.js';

// const cv = require('../vendor/opencv');
const cv = require('opencv4nodejs');
// import cv from 'opencv4nodejs';
const SPREAD = 69, SUBTRACT = 50;
const TOTAL_RE = /(s[ou]b-?|ne[t71]\s+)?([\[jf17t\]]?\s*[oun0]\s*[tf7]\s*[4a]\s*[17li\)_]?).*?([0-9]+\s*[.,'][0-9\s]+)\W*$/gim;
const TAX_RE = /(H[GS]T|Tax\W*H?).*([0-9]+\s*[.,'][0-9\s]+)$/gim;
const CAT_RES = [
	/(cookie|cand(y|ies)|snack|chip|dorito|ruffle)/gim,
	/(restaurant|eater(y|ies)|food|mcdonald|kfc)/gim,
	/(sock|walk|winner|wear|lace|glove|uniqlo|pant|shirt|shoe|heel|jacket|coat)/gim,
	/(best buy|outlet|comp|tech|keyb|mouse|head)/gim,
	/(laundry|screw|nail|hammer|drill|ax|shovel)/gim,
	/(nintendo|epic|xbox|play|game|entertain)/gim,
];
const CATS = [
	'Snacks',
	'Restaurant/Eating',
	'Clothes/Fashion',
	'Gadgets/Tech',
	'Tools/Hardware',
	'Entertainment/Games',
];
const METH_RES = [
	/(cash|cdn|change|tend)/gim,
	/(debit|interac)/gim,
	/(credit|card)/gim,
];
const METHODS = ['Cash', 'Debit/Interac', 'Credit'];

const worker = Tesseract.createWorker({ logger: m => document.dispatchEvent(
	new CustomEvent('ocrprogress', { detail: m })
)});
(async () => {
	await worker.load();
	await worker.loadLanguage('eng');
	await worker.initialize('eng');
})();

/**
 * Parse a floating point string, potentially with noise.
 * @param {string} s The floating point string
 * @return {number} The floating point number
 */
const num = s => {
	return parseFloat(s.replace(/\s/g, '').replace(/[,']/, '.'));
};

/**
 * Find the constant referenced the most times in the text,
 * where number of references is determined by regexes.
 * @param {string} text The text referencing the constants
 * @param {RegExp[]} regexes The regexes that arbitrate references
 * @param {string[]} consts The constants, each corresponding to one regex
 * @return {string?} The constant referenced the most
 */
const maxFromMatch = (text, regexes, consts) => {
	let count = 0, result = null, c;
	for (let i = 0; i < regexes.length; ++i) {
		c = text.match(regexes[i]);
		if (!c) continue; // no matches, never counted
		c = c.length;
		if (c > count) {
			count = c;
			result = consts[i];
		}
	}
	return result;
};

/**
 * Get a Blob from an HTML canvas.
 * @param {HTMLCanvasElement} canvas The canvas to blobbify
 * @return {Promise<Blob>} The blob
 */
const getCanvasBlob = canvas => {
	return new Promise((resolve, reject) => {
		canvas.toBlob(blob => resolve(blob));
	});
};

/**
 * Convert an image into black and white only,
 * a format more suitable for OCR.
 * @param cv The OpenCV module
 * @param {HTMLImageElement} imageSrc The <img> element holding the original image
 * @param {number} spread The degree of spread for Gaussian thresholding
 * @param {number} subtract The constant subtracted during thresholding
 * @return {cv.Mat} The resulting image data
 */
export const doThreshold = (cv, imageSrc, spread = SPREAD, subtract = SUBTRACT) => {
	let mat = cv.imread(imageSrc);
	// convert image to grayscale
	cv.cvtColor(mat, mat, cv.COLOR_BGR2GRAY);
	// convert grayscale to black and white only, using gaussian adaptive thresholding
	cv.adaptiveThreshold(mat, mat, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, spread, subtract);
	// output the thresholded image to the canvas, for Tesseract to use
	cv.imshow("outputCanvas", mat);
	return mat;
};

/**
 * Perform optical character recognition on a canvas' content.
 * @param {HTMLCanvasElement} canvas The canvas to process
 * @return {Promise<{
 * total: string,
 * spending_category: string,
 * payment_method: string
 * }>} The data from the canvas
 */
export const doOCR = async canvas => {
	let blob = await getCanvasBlob(canvas);
	let url = URL.createObjectURL(blob);
	let total;
	// OCR magic =)
	const { data: { text } } = await worker.recognize(url);
	// find anything that looks like a "Total:" chunk
	let potential_totals = Array.from(text.matchAll(TOTAL_RE));
	// since the total always comes after the subtotals, assume it comes last
	let potential_total = potential_totals[potential_totals.length - 1];
	if (!potential_total) {
		// literally nothing even looks like "total" or "subtotal"
		return null;
	} else if (potential_total[1]) {
		// group 1 of this regex matches "sub" or "net" before "total"
		// if the last match was a sub-total, this is not the final total
		// group 3 of the regex matches the actual number
		let subtotal = num(potential_total[3]);
		// find anything that looks like "HST" or "Tax:"
		let potential_taxes = Array.from(text.matchAll(TAX_RE));
		// like before, it should come last
		let potential_tax = potential_taxes[potential_taxes.length - 1];
		if (!potential_tax) {
			// can't even fall back to subtotal + tax
			return null;
		}
		// group 2 of the tax regex matches the number
		let tax = num(potential_tax[2]);
		total = subtotal + tax;
	} else {
		total = num(potential_total[3]);
	}
	let cat = maxFromMatch(text, CAT_RES, CATS);
	let meth = maxFromMatch(text, METH_RES, METHODS) || METHODS[0];
	return {
		total: total,
		spending_category: cat,
		payment_method: meth
	};
};
