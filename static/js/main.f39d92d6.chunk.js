(this["webpackJsonpsimple-light-react"]=this["webpackJsonpsimple-light-react"]||[]).push([[0],{52:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/hero-image.6a928f83.png"},94:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(14),c=n.n(s),l=n(17),i=n(2),o=(n(52),n(41)),d=n.n(o),u=n(46),j=n(21),b=n(10),h=n(0);var x=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){window.pageYOffset>10?a(!1):a(!0)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),Object(h.jsx)("header",{className:"fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ".concat(!n&&"bg-white blur shadow-lg"),children:Object(h.jsx)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:Object(h.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[Object(h.jsx)("div",{className:"flex-shrink-0 mr-4",children:Object(h.jsx)(l.b,{to:"/",className:"block","aria-label":"Cruip",children:Object(h.jsxs)("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"header-logo",children:[Object(h.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),Object(h.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),Object(h.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})}),Object(h.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"url(#header-logo)",fillRule:"nonzero"})]})})}),Object(h.jsx)("nav",{className:"flex flex-grow",children:Object(h.jsx)("ul",{className:"flex flex-grow justify-end flex-wrap items-center",children:Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://devpost.com/software/costcatcher",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("span",{children:"Team"}),Object(h.jsx)("svg",{className:"w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})})})})]})})})},m=n(5),f=n.n(m),p=n(13),g=["Other","Snacks","Restaurant","Clothes","Gadgets","Tools","Entertainment"],O=["Cash","Debit Card/Interac","Visa Card"],v=function(e){var t=Object(r.useState)(e.show),n=Object(b.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.results),l=Object(b.a)(c,2),i=l[0],o=l[1],d=function(e){if(i&&e)if(console.log(i),localStorage.getItem("data")){var t=JSON.parse(localStorage.getItem("data"));t.push({total:i.total,spending_category:i.spending_category,payment_method:i.payment_method}),localStorage.setItem("data",JSON.stringify(t)),o(null)}else localStorage.setItem("data",JSON.stringify([]));s(!1)},u=function(e,t,n){o({total:e,spending_category:t,payment_method:n})};return Object(h.jsx)("div",{children:a&&i&&Object(h.jsx)("div",{className:"flex justify-center h-screen items-center bg-gray-200 antialiased",children:Object(h.jsxs)("div",{className:"flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl",children:[Object(h.jsxs)("div",{className:"flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg",children:[Object(h.jsx)("p",{className:"font-semibold text-gray-800",children:"Summary"}),Object(h.jsx)("button",{onClick:function(){return d(!1)},children:Object(h.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),Object(h.jsxs)("div",{className:"flex px-6 py-5 bg-gray-50",children:[Object(h.jsxs)("div",{className:"flex flex-col text-lg sm:flex-row items-center mb-5 sm:space-x-5",children:[Object(h.jsxs)("div",{className:"w-full sm:w-1/2",children:[Object(h.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Total Spent ($)"}),Object(h.jsx)("input",{type:"number",name:"",className:"p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm",defaultValue:i.total,onChange:function(e){return u(e.target.value,i.spending_category,i.payment_method)}})]}),Object(h.jsxs)("div",{className:"w-full sm:w-1/2",children:[Object(h.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Spending Category"}),Object(h.jsx)("select",{type:"text",name:"",className:"w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none",id:"",defaultValue:i.spending_category,onChange:function(e){return u(i.total,e.target.value,i.payment_method)},children:g.map((function(e,t){return Object(h.jsx)("option",{value:t,children:e},t)}))})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"w-full sm:w-1/2 mt-2 sm:mt-0",children:[Object(h.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Payment Method"}),Object(h.jsx)("select",{type:"text",name:"",className:"w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none",id:"",defaultValue:i.payment_method,onChange:function(e){return u(i.total,i.spending_category,e.target.value)},children:O.map((function(e,t){return Object(h.jsx)("option",{value:t,children:e},t)}))})]})]}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg",children:[Object(h.jsx)("button",{className:"font-semibold text-gray-600",onClick:function(){return d(!1)},children:"Cancel"}),Object(h.jsx)("button",{className:"px-4 py-2 text-white font-semibold bg-blue-500 rounded",onClick:function(){return d(!0)},children:"Confirm"})]})]})})})},w=n(44),y=n.n(w),N=n(23),C=/(s[ou]b-?|ne[t71]\s+)?([[jf17t\]]?\s*[oun0]\s*[tf7]\s*[4a]\s*[17li)_]?).*?([0-9]+\s*[.,'][0-9\s]+)\W*$/gim,E=/(H[GS]T|Tax\W*H?).*([0-9]+\s*[.,'][0-9\s]+)$/gim,k=[/^(?!x)x/i,/(cookie|cand(y|ies)|snack|chip|dorito|ruffle)/gim,/(restaurant|eater(y|ies)|food|mcdonald|kfc)/gim,/(sock|walk|winner|wear|lace|glove|uniqlo|pant|shirt|shoe|heel|jacket|coat)/gim,/(best buy|outlet|comp|tech|keyb|mouse|head)/gim,/(laundry|screw|nail|hammer|drill|ax|shovel)/gim,/(nintendo|epic|xbox|play|game|entertain)/gim],S=[/(cash|cdn|change|tend)/gim,/(debit|interac)/gim,/(credit)/gim],_=y.a.createWorker({logger:function(e){return Object(N.emitCustomEvent)("ocrprogress",{detail:e})}});Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.load();case 2:return e.next=4,_.loadLanguage("eng");case 4:return e.next=6,_.initialize("eng");case 6:case"end":return e.stop()}}),e)})))();var R=function(e){return parseFloat(e.replace(/\s/g,"").replace(/[,']/,"."))},L=function(e,t,n){for(var r,a=0,s=null,c=0;c<t.length;++c)(r=e.match(t[c]))&&(r=r.length)>a&&(a=r,s=n[c]);return s},z=function(e){return new Promise((function(t,n){e.toBlob((function(e){return t(e)}))}))},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:69,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,a=e.imread(t);return e.cvtColor(a,a,e.COLOR_BGR2GRAY),e.adaptiveThreshold(a,a,255,e.ADAPTIVE_THRESH_GAUSSIAN_C,e.THRESH_BINARY,n,r),e.imshow("outputCanvas",a),a},A=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,a,s,c,l,i,o,d,u,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return n=e.sent,r=URL.createObjectURL(n),a={total:null,spending_category:null,payment_method:null},e.next=7,_.recognize(r);case 7:return s=e.sent,c=s.data.text,l=Array.from(c.matchAll(C)),(i=l[l.length-1])&&(i[1]?(o=R(i[3]),d=Array.from(c.matchAll(E)),(u=d[d.length-1])&&(j=R(u[2]),a.total=o+j)):a.total=R(i[3])),a.spending_category=L(c,k,g),a.payment_method=L(c,S,O)||O[0],e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=(n(92),function(){return Object(h.jsx)("div",{className:"triple-spinner-container",children:Object(h.jsx)("div",{className:"triple-spinner"})})}),I=n(19),D=n(9),H=n(31),T=n(96),G=["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"],M=["show","appear"],V=a.a.createContext({parent:{}});function W(e){var t=e.show,n=e.enter,r=void 0===n?"":n,s=e.enterStart,c=void 0===s?"":s,l=e.enterEnd,i=void 0===l?"":l,o=e.leave,d=void 0===o?"":o,u=e.leaveStart,j=void 0===u?"":u,b=e.leaveEnd,x=void 0===b?"":b,m=e.appear,f=e.unmountOnExit,p=e.tag,g=void 0===p?"div":p,O=e.children,v=Object(H.a)(e,G),w=r.split(" ").filter((function(e){return e.length})),y=c.split(" ").filter((function(e){return e.length})),N=i.split(" ").filter((function(e){return e.length})),C=d.split(" ").filter((function(e){return e.length})),E=j.split(" ").filter((function(e){return e.length})),k=x.split(" ").filter((function(e){return e.length})),S=f;function _(e,t){var n;t.length&&(n=e.classList).add.apply(n,Object(D.a)(t))}function R(e,t){var n;t.length&&(n=e.classList).remove.apply(n,Object(D.a)(t))}var L=a.a.useRef(null),z=g;return Object(h.jsx)(T.a,{appear:m,nodeRef:L,unmountOnExit:S,in:t,addEndListener:function(e){L.current.addEventListener("transitionend",e,!1)},onEnter:function(){S||(L.current.style.display=null),_(L.current,[].concat(Object(D.a)(w),Object(D.a)(y)))},onEntering:function(){R(L.current,y),_(L.current,N)},onEntered:function(){R(L.current,[].concat(Object(D.a)(N),Object(D.a)(w)))},onExit:function(){_(L.current,[].concat(Object(D.a)(C),Object(D.a)(E)))},onExiting:function(){R(L.current,E),_(L.current,k)},onExited:function(){R(L.current,[].concat(Object(D.a)(k),Object(D.a)(C))),S||(L.current.style.display="none")},children:Object(h.jsx)(z,Object(I.a)(Object(I.a)({ref:L},v),{},{style:{display:S?null:"none"},children:O}))})}var J=function(e){var t=e.show,n=e.appear,a=Object(H.a)(e,M),s=Object(r.useContext)(V).parent,c=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){e.current=!1}),[]),e.current}();return void 0===t?Object(h.jsx)(W,Object(I.a)({appear:s.appear||!s.isInitialRender,show:s.show},a)):Object(h.jsx)(V.Provider,{value:{parent:{show:t,isInitialRender:c,appear:n}},children:Object(h.jsx)(W,Object(I.a)({appear:n,show:t},a))})};var P=function(e){var t=e.children,n=e.id,a=e.ariaLabel,s=e.show,c=e.handleClose,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=function(e){var t=e.target;s&&!l.current.contains(t)&&c()};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}})),Object(r.useEffect)((function(){var e=function(e){27===e.keyCode&&c()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(J,{className:"fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity blur",show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),Object(h.jsx)(J,{id:n,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":a,show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0 scale-95",enterEnd:"opacity-100 scale-100",leave:"transition ease-out duration-200",leaveStart:"opacity-100 scale-100",leaveEnd:"opacity-0 scale-95",children:Object(h.jsx)("div",{className:"bg-white overflow-auto max-w-6xl w-full max-h-full",ref:l,children:t})})]})};var U=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(r.useState)(null),l=Object(b.a)(c,2),i=l[0],o=l[1],d=Object(r.useState)(!1),u=Object(b.a)(d,2),x=u[0],m=u[1],w=Object(r.useState)(!1),y=Object(b.a)(w,2),C=y[0],E=y[1],k=Object(j.b)().cv,S=Object(r.useRef)(null),_=Object(r.useRef)(null),R=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(k,S.current),e.t0=o,e.next=4,A(_.current);case 4:e.t1=e.sent,(0,e.t0)(e.t1),m(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.useCustomEventListener)("ocrprogress",(function(e){console.log(e.detail.progress),1===e.detail.progress&&(console.log("end"),E(!1))})),Object(r.useEffect)((function(){E(!1)}),[x,i]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{className:"relative",children:[Object(h.jsx)("img",{alt:"",ref:S,id:"imageSrc",height:"850",onLoad:R}),Object(h.jsx)("canvas",{ref:_,id:"outputCanvas",height:"850"}),C?Object(h.jsx)(B,{}):Object(h.jsxs)("div",{children:[x&&i&&Object(h.jsx)(v,{show:x,results:{total:i.total,spending_category:g.indexOf(i.spending_category),payment_method:O.indexOf(i.payment_method)}}),Object(h.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none","aria-hidden":"true",children:Object(h.jsxs)("svg",{width:"1360",height:"578",viewBox:"0 0 1360 578",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsxs)("defs",{children:[Object(h.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"illustration-01",children:[Object(h.jsx)("stop",{stopColor:"#FFF",offset:"0%"}),Object(h.jsx)("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),Object(h.jsx)("stop",{stopColor:"#DFDFDF",offset:"100%"})]}),Object(h.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"illustration-02",children:[Object(h.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),Object(h.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),Object(h.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})]}),Object(h.jsx)("g",{fill:"url(#illustration-01)",fillRule:"evenodd",children:Object(h.jsx)("circle",{cx:"1232",cy:"128",r:"128"})}),Object(h.jsx)("g",{fill:"url(#illustration-02)",fillRule:"evenodd",children:Object(h.jsx)("circle",{cx:"155",cy:"443",r:"64"})})]})}),Object(h.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:Object(h.jsxs)("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[Object(h.jsxs)("div",{className:"text-center pb-12 md:pb-16",children:[Object(h.jsxs)("h1",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4","data-aos":"zoom-y-out",children:["A quick",Object(h.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400",children:" ritual"}),Object(h.jsx)("span",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4",children:" after every"}),Object(h.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-teal-500",children:" receipt"})]}),Object(h.jsxs)("div",{className:"max-w-3xl mx-auto",children:[Object(h.jsx)("p",{className:"text-xl text-gray-600 mb-8","data-aos":"zoom-y-out","data-aos-delay":"150",children:"Bees are small flying insects, buzzing around with its painful stings which always make people afraid and annoyed. Without bees, aftermath."}),Object(h.jsxs)("div",{className:"max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center","data-aos":"zoom-y-out","data-aos-delay":"300",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("label",{htmlFor:"upload",onChange:function(e){S.current.src=URL.createObjectURL(e.target.files[0]),E(!0)},children:[Object(h.jsx)("span",{className:"btn cursor-pointer text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0",children:"Start using"}),Object(h.jsx)("input",{type:"file",id:"upload",style:{display:"none"},accept:"image/jpeg, image/png"})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{className:"btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4",href:"https://github.com/Kenny2github/Rite",target:"_blank",rel:"noopener noreferrer",children:"Source code"})})]})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"relative flex justify-center mb-8","data-aos":"zoom-y-out","data-aos-delay":"450",children:[Object(h.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(h.jsx)("img",{className:"mx-auto",src:n(93).default,width:"768",height:"432",alt:"Hero"}),Object(h.jsx)("svg",{className:"absolute inset-0 max-w-full mx-auto md:max-w-none h-auto",width:"768",height:"432",viewBox:"0 0 768 432",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("circle",{fillOpacity:".04",fill:"url(#hero-ill-a)",cx:"384",cy:"216",r:"128"}),Object(h.jsx)("circle",{fillOpacity:".16",fill:"url(#hero-ill-b)",cx:"384",cy:"216",r:"96"}),Object(h.jsxs)("g",{fillRule:"nonzero",children:[Object(h.jsx)("use",{fill:"#000",xlinkHref:"#hero-ill-d"}),Object(h.jsx)("use",{fill:"url(#hero-ill-e)",xlinkHref:"#hero-ill-d"})]})]})})]}),Object(h.jsxs)("button",{className:"absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg",onClick:function(e){e.preventDefault(),e.stopPropagation(),s(!0)},"aria-controls":"modal",children:[Object(h.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"}),Object(h.jsx)("path",{d:"M10 17l6-5-6-5z"})]}),Object(h.jsx)("span",{className:"ml-3",children:"Watch the demo (2 min)"})]})]}),Object(h.jsx)(P,{id:"modal",ariaLabel:"modal-headline",show:a,handleClose:function(){return s(!1)},children:Object(h.jsx)("div",{className:"relative pb-9/16",children:Object(h.jsx)("iframe",{className:"absolute w-full h-full",src:"https://www.youtube.com/embed/23oudXZxi-I",title:"Video",allowFullScreen:!0})})})]})]})})]})]})})};var q=function(){return Object(h.jsxs)("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{className:"flex-grow",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(U,{})})})]})},Y=n(45),$=n.n(Y),X={facingMode:"environment",width:1080,height:720},K=function(){var e=a.a.useRef(null),t=function(){var t=Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.current.getScreenshot(),console.log(n),alert("Image captured");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"flex h-screen bg-gray-300",children:Object(h.jsxs)("div",{className:"m-auto",children:[Object(h.jsx)($.a,{audio:!1,ref:e,screenshotFormat:"image/jpeg",screenshotQuality:1,videoConstraints:X}),Object(h.jsx)("button",{className:"btn flex m-auto text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0",onClick:t,children:"Capture"})]})})};var Q=function(){var e=Object(i.f)();return Object(r.useEffect)((function(){d.a.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})})),Object(r.useEffect)((function(){document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior="",Object(u.a)("outline")}),[e.pathname]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",children:Object(h.jsx)(q,{})}),Object(h.jsx)(i.a,{path:"/camera",children:Object(h.jsx)(K,{})})]})})};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(Q,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.f39d92d6.chunk.js.map