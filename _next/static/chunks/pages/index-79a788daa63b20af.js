(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3192)}])},8045:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,s=void 0!==i&&i,u=e.priority,d=void 0!==u&&u,m=e.loading,h=e.lazyBoundary,A=void 0===h?"200px":h,b=e.className,v=e.quality,y=e.width,w=e.height,k=e.objectFit,S=e.objectPosition,E=e.onLoadingComplete,O=e.loader,N=void 0===O?I:O,z=e.placeholder,B=void 0===z?"empty":z,L=e.blurDataURL,R=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in R&&(R.layout&&(D=R.layout),delete R.layout);var C="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var P=_(t)?t.default:t;if(!P.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(P)));if(L=L||P.blurDataURL,C=P.src,(!D||"fill"!==D)&&(w=w||P.height,y=y||P.width,!P.height||!P.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(P)))}t="string"===typeof t?t:C;var U=j(y),M=j(w),H=j(v),q=!d&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,q=!1);p.has(t)&&(q=!1);0;var J,Q=r(l.useIntersection({rootMargin:A,disabled:!q}),2),V=Q[0],T=Q[1],W=!q||T,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},F={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X=!1,K={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:S},Y="blur"===B?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===D)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if("undefined"!==typeof U&&"undefined"!==typeof M){var Z=M/U,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===D?(G.display="block",G.position="relative",X=!0,F.paddingTop=$):"intrinsic"===D?(G.display="inline-block",G.position="relative",G.maxWidth="100%",X=!0,F.maxWidth="100%",J='<svg width="'.concat(U,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(G.display="inline-block",G.position="relative",G.width=U,G.height=M)}else 0;var ee={src:g,srcSet:void 0,sizes:void 0};W&&(ee=x({src:t,unoptimized:s,layout:D,width:U,quality:H,sizes:n,loader:N}));var te=t;0;return a.default.createElement("span",{style:G},X?a.default.createElement("span",{style:F},J?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(J))}):null):null,a.default.createElement("img",Object.assign({},R,ee,{decoding:"async","data-nimg":D,className:b,ref:function(e){V(e),function(e,t,n,r,i){if(!e)return;var a=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),i){var n=e.naturalWidth,a=e.naturalHeight;i({naturalWidth:n,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,te,0,B,E)},style:f({},K,Y)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},R,x({src:t,unoptimized:s,layout:D,width:U,quality:H,sizes:n,loader:N}),{decoding:"async","data-nimg":D,style:K,className:b,loading:m||"lazy"}))),d?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imagesrcset:ee.srcSet,imagesizes:ee.sizes})):null)};var a=d(n(7294)),o=d(n(5443)),c=n(6978),s=n(5809),l=n(7190);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){u(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var p=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(k(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://pechenyice.github.io/",loader:"imgix"}||s.imageConfigDefault,A=h.deviceSizes,b=h.imageSizes,v=h.loader,y=h.path,w=(h.domains,i(A).concat(i(b)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,s=.01*(c=Math).min.apply(c,i(o));return{widths:w.filter((function(e){return e>=A[0]*s})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:A,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:o,width:u[f]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t=m.get(v);if(t)return t(f({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(v))}function k(e){return"/"===e[0]?e.slice(1):e}A.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=i.useRef(),l=r(i.useState(!1),2),u=l[0],d=l[1],f=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=n(7294),a=n(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},3192:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return m}});var r=n(5893),i=n(7294),a=n(7852),o=n.n(a),c=n(5675);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ")}var l=n(818),u=n.n(l),d={src:"/quartetLanding/_next/static/media/back.c1514a3e.png",height:485,width:626,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAcUlEQVR42gFmAJn/ACMASg9YRpc+pi3WD44A/wAA1gEivyv/Q/9J9l7xp3JHAABLBx3bCv8A/QD+AP9g+MEcAH1KN/8A/wD6B/8W/zDN0woAmgxoaS3mJP843Gt9gCCBAACnAE4AXh5EhGIeQQB0AHcCJKknZUSPNhkAAAAASUVORK5CYII="},f={src:"/quartetLanding/_next/static/media/violin.c930c901.png",height:752,width:286,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAc0lEQVR4nAFoAJf/AYtyYwjz499p5gkVngGNb18M2/L+VwHw8KUBxE4AAJcba1VM3MOrAcNeLnfI+B2FBuXdeQHGaDOXy/EUaPTZ4ZoBwHU/auXnA5XT1+ttAa1NJvrV8AkFAfn6/QFkMym51/UDRUgP/rpoiDP56/aCEQAAAABJRU5ErkJggg=="};function p(e){e.kvartet;return(0,r.jsxs)("section",{className:u().wrapper,children:[(0,r.jsxs)("div",{className:u().main,children:[(0,r.jsxs)("span",{className:u().mainAccent,children:[(0,r.jsx)("span",{className:u().appearance_1,children:"Clio quartet"}),(0,r.jsx)("span",{className:u().appearance_6,children:","})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:u().appearance_6,children:"\u043a\u043e\u0442\u043e\u0440\u044b\u0439 "}),(0,r.jsx)("span",{className:s(u().addAccent,u().appearance_2),children:"\u043f\u0440\u0438\u044f\u0442\u043d\u043e"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:s(u().addAccentLast,u().appearance_3),children:"\u043f\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c"})]}),(0,r.jsxs)("div",{className:u().imageBox,children:[(0,r.jsx)("div",{className:s(u().logoBack,u().appearance_4),children:(0,r.jsx)(c.default,{src:d,alt:"logo back"})}),(0,r.jsx)("div",{className:s(u().logo,u().logoAddition_1,u().appearance_5),children:(0,r.jsx)(c.default,{src:f,alt:"logo main"})}),(0,r.jsx)("div",{className:s(u().logo,u().logoAddition_2,u().appearance_5),children:(0,r.jsx)(c.default,{src:f,alt:"logo main"})}),(0,r.jsx)("div",{className:s(u().logo,u().logoAddition_3,u().appearance_5),children:(0,r.jsx)(c.default,{src:f,alt:"logo main"})}),(0,r.jsx)("div",{className:s(u().logo,u().appearance_5),children:(0,r.jsx)(c.default,{src:f,alt:"logo main"})})]}),(0,r.jsx)("div",{className:u().button,children:"\u0417\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u044b?"})]})}var g=!0,m=function(e){var t=e.kvartet,n=(0,i.useState)([]),a=n[0],c=n[1];return(0,i.useEffect)((function(){c(JSON.parse(t))}),[t]),(0,r.jsx)("section",{className:o().app,children:(0,r.jsx)(p,{kvartet:a})})}},7852:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},818:function(e){e.exports={wrapper:"Intro_wrapper__bS3CZ",main:"Intro_main__3cj_C",imageBox:"Intro_imageBox__RqM2j",mainAccent:"Intro_mainAccent__ABu_p",addAccent:"Intro_addAccent__3p8cA",addAccentLast:"Intro_addAccentLast__dzrEI",accentInit:"Intro_accentInit__XL3l8",appearance_1:"Intro_appearance_1__UmJOS",appearanceInit:"Intro_appearanceInit__lQ7eR",appearance_2:"Intro_appearance_2__vD6O1",appearance_3:"Intro_appearance_3__LV407",appearance_4:"Intro_appearance_4__Metvv",appearance_5:"Intro_appearance_5__B9tlF",appearance_6:"Intro_appearance_6__yAlMq",logoBack:"Intro_logoBack__i7_n0",logoAddition_1:"Intro_logoAddition_1__NggrV",logoAddition_2:"Intro_logoAddition_2__EUxmf",logoAddition_3:"Intro_logoAddition_3__BJ3Zu",logo:"Intro_logo__IDYx6",button:"Intro_button___wyIe",buttonInit:"Intro_buttonInit__mQ_O_"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);