var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire8ba2;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire8ba2=a);var o=a("1tHc5"),r=a("bQjlg"),c=a("etBjH");a("1tHc5");a("bQjlg"),r=a("bQjlg");a("fXOuZ");c=a("etBjH"),c=a("etBjH"),c=a("etBjH");a("cblOc");const i=c.getFirestore(r.app);var s=a("7tOtO"),d=a("bdlMF"),u=a("dawBO");const l=c.getFirestore(r.app),p=o.getAuth();let g,m=[];const b=document.getElementById("product_assets"),h=document.getElementById("product_info");async function f(){const t=function(t){const e=window.location.search;return new URLSearchParams(e).get(t)}("id");!function(t){b.innerHTML=`\n    \n    <img class="product_image" id="pImage" src="${t.images[0]}">\n\n    `;const e=m.some((e=>e.id===t.id))?'<button class="product_cart" disabled>Product added to cart</button>':'<button class="product_cart">Add to cart</button>';h.innerHTML=`\n\n        <h1 class="product_name">\n        ${t.nameValue}\n        </h1>\n        <p class="product_desc">\n        lorem ipsum\n        </p>\n        <h3 class="product_price">\n        ${t.price}.00$\n        </h3>\n\n        <button class="showcase__button">Go to showcase</button>\n        ${e}\n\n    `;const n=document.querySelector(".product_cart");n.addEventListener("click",(e=>{m.push(t),g&&d.createFirebaseCart(l,g.uid,m),n.setAttribute("disabled",!0),n.innerText="Product added to cart"}));document.querySelector(".showcase__button").addEventListener("click",(e=>{"Guitar"==t.instrument?window.location.href="https://ahtepsilon.github.io/virtual_guitar_game/game/index.html":"Bass"==t.instrument&&(window.location.href="https://ahtepsilon.github.io/virtual_guitar_game/game/bass.html")}))}({...await async function(t){const e=c.doc(i,"items",t);return(await c.getDoc(e,"items")).data()}(t),id:t})}document.getElementById("navbar__addItem__a").addEventListener("click",(t=>{u.validate(l,p)})),o.onAuthStateChanged(p,(async t=>{o.onAuthStateChanged(p,(async t=>{t?(g=t,m=await d.getFirebaseCart(l,g.uid),console.log(m)):m=s.getCart(),f()}))}));
//# sourceMappingURL=product.dbe31ad3.js.map