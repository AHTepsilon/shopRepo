import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {createFirebaseCart, getFirebaseCart} from "./utils/cartFunction";

import { collection, getDocs } from "firebase/firestore";

import { fetchItems } from "./utils/item";

import { getFirebaseCart, createFirebaseCart } from "./utils/cartFunction";

const db = getFirestore(app);
const auth = getAuth();

const itemsArea = document.getElementById("section__new_deals_div_product_showcase");

let userHasLoggedIn = undefined;
let productArr = [];
let shoppingCart = [];

async function getItems(){

    const firebaseProducts = await fetchItems(db);
    itemsArea.innerHTML = "";
    console.log(firebaseProducts);

    firebaseProducts.forEach(product =>{

        displayItems(product);

    });

    productArr = firebaseProducts;

}

function displayItems(item){

    const product = document.createElement("a");
    product.className = "product";
    
    product.setAttribute("href", `./product.html?id=${item.id}`);

    const placeholder = item.images ? item.images[0] : "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"

    const cartHasProducts = shoppingCart.some((productCart) =>{

        productCart.id === item.id;

    });

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

    console.log(btnAddToCart);

    btnAddToCart.addEventListener("click", async (ev) =>{

        ev.preventDefault();
        console.log(ev);

        shoppingCart.push(item);
        addToCart();

        if(userHasLoggedIn){
            await createFirebaseCart(db, userHasLoggedIn.uid, shoppingCart);
        }

        btnAddToCart.setAttribute("disabled", true);
        btnAddToCart.innerHTML = "Product added";

    });


}

async function addToCart(){

    localStorage.setItem("cart", JSON.stringify(shoppingCart));


}

function getLocalCart(){
    
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
}

onAuthStateChanged(auth, async (user) =>{

    console.log(user);

    if(user){
        userHasLoggedIn = user;
        shoppingCart = await getFirebaseCart(db, userHasLoggedIn.uid);
        
    }

    else{
        shoppingCart = getLocalCart();
    }
});


export{

    productArr,
    displayItems,
    itemsArea,
        
}

getItems();