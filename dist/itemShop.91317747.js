var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire8ba2;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire8ba2=o),o.register("dawBO",(function(e,t){var n,r,a,i;n=e.exports,r="validate",a=()=>s,Object.defineProperty(n,r,{get:a,set:i,enumerable:!0,configurable:!0});var d=o("etBjH"),l=o("1tHc5");function s(e,t){l.onAuthStateChanged(t,(t=>{if(t){const n=t.uid;d.getDoc(d.doc(e,"users",n)).then((e=>{const t=e.data();console.log(t.admin),t.admin?window.location.href="./addItems.html":alert("Only administrators can add items")}))}else alert("Only administrators can add items")}))}}));
//# sourceMappingURL=itemShop.91317747.js.map