import { getFirestore } from "firebase/firestore";
import {createFirebaseCart, getFirebaseCart} from "./utils/cartFunction";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";

import { fetchItems } from "./utils/item";

let cartHasProducts;
let userHasLoggedIn = undefined;

const db = getFirestore(app);
const auth = getAuth();

async function getItems(db) {
    try {
        const firebaseProducts = await fetchItems(db);

        return firebaseProducts;
    } catch(e) {
        //console.log(e);
    }

}

function displayItems(item, shoppingCart, itemsArea){

    const product = document.createElement("a");
    product.className = "product";
    
    product.setAttribute("href", `./product.html?id=${item.id}`);

    const placeholder = item.images ? item.images[0] : "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"

    //console.log(shoppingCart);

    if(shoppingCart.length > 0){
 
        cartHasProducts = shoppingCart.some((productCart) =>{

            productCart.id === item.id;

        });
    }

    const addToCartBtnEnable = cartHasProducts ? 
    `<button class="add_cart_button" id="add_cart_button">Product added to cart</button>` :
    `<button class="add_cart_button" id="add_cart_button">Add to cart</button>` ;

    product.innerHTML = `
    
    <div class="section__new_deals_div_product_showcase_text">
    <h2 class="product_price" id="product_price">${item.price}.00$</h2>
    <p class="product_name" id="product_name">${item.nameValue}</p>
    </div>
    <img src="${placeholder}" alt="product_pic" class="product_image guitarPhoto" id="product_image">
    ${addToCartBtnEnable}

    `;

    itemsArea.appendChild(product);

    
    const btnAddToCart = product.querySelector(".add_cart_button");

    //console.log(btnAddToCart);

    btnAddToCart.addEventListener("click", async (ev) =>{

        ev.preventDefault();
        console.log(ev);

        shoppingCart.push(item);
        addToCart(shoppingCart);

        if(userHasLoggedIn){
            await createFirebaseCart(db, userHasLoggedIn.uid, shoppingCart);
        }

        btnAddToCart.setAttribute("disabled", true);
        btnAddToCart.innerHTML = "Product added";

        console.log(userHasLoggedIn);

    });


}

async function addToCart(shoppingCart){

    localStorage.setItem("cart", JSON.stringify(shoppingCart));


}

function getCart(){
    
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userHasLoggedIn = user;
      cart = await getFirebaseCart(db, userHasLoggedIn.uid);
      // ...
    } else {
        cart = getCart();
      // User is signed out
      // ...
    }

    getItems();

  });

export{
    getItems,
    displayItems,
    getCart,
    addToCart
        
}
