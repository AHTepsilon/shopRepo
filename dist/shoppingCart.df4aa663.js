var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire8ba2;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire8ba2=o);var r=o("1tHc5"),a=o("bdlMF"),i=o("7tOtO"),l=o("etBjH"),d=o("bQjlg");d=o("bQjlg");o("fXOuZ");const c=document.getElementById("item_list"),s=document.getElementById("final_price"),u=document.getElementById("checkout_button_a");let g=[];const p=l.getFirestore(d.app),f=r.getAuth();function m(e){let t=0;e.forEach((e=>{!function(e){const t=document.createElement("li");t.className="product",t.innerHTML=`\n    <img src="${e.images[0]}" class="product_image">\n    <h2 class="product_name">${e.nameValue}</h2>\n    <h3 class="product_price">${e.price}.00$</h3>\n    <button class="product_delete">X</button>\n    `,c.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("removed"),async function(e){const t=g.filter((t=>t.id!==e));g=t,userHasLoggedIn&&await a.createFirebaseCart(p,userHasLoggedIn.uid,t);i.addToCart(t),c.innerHTML="",m(t)}(e.id))}))}(e),t+=parseInt(e.price)})),s.innerText=t.toString()+".00$"}u.addEventListener("click",(e=>{g.length>0?window.location.href="./paymentPage.html":alert("Could not find products in shopping cart")})),r.onAuthStateChanged(f,(async e=>{e?(userHasLoggedIn=e,g=await a.getFirebaseCart(p,userHasLoggedIn.uid)):(g=i.getCart(),alert("Please log in before proceeding to cart"),window.location.href="./login.html"),m(g)}));
//# sourceMappingURL=shoppingCart.df4aa663.js.map
