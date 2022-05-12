import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import { productArr, displayItems } from "./itemShowcase";
import {createFirebaseCart, getFirebaseCart} from "./utils/cartFunction";

import { collection, getDoc } from "firebase/firestore";

import { fetchItems } from "./utils/item";

const db = getFirestore(app);
const auth = getAuth();

const addItemBtn = document.getElementById("navbar__addItem__a");

const itemsArea = document.getElementById("item_list");

let userHasLoggedIn = undefined;
let productArr = [];
let shoppingCart = [];

async function getItems(){

    const firebaseProducts = await fetchItems(db);
    itemsArea.innerHTML = "";
    console.log(firebaseProducts);

    firebaseProducts.forEach(product =>{

        renderCartItems(product);

    });

    productArr = firebaseProducts;

}

function renderCartItems(item){

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const cartInfoItem = document.createElement("div");
    cartInfoItem.className = "cart-info";

    const placeholder = item.images ? item.images[0] : "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";

    const cartHasProducts = shoppingCart.some((productCart) =>{

        productCart.id === item.id;

    });

    cartInfoItem.innerHTML = `

    <h2 class="product_name" id="product_name">${item.nameValue}</h2>
    <h2 class="product_price" id="product_price">${item.price}.00$</h2>

    `;

    cartItem.innerHTML = `
    
    <img src="${placeholder}" class="product_image guitarPhoto" id="product_image>

    `;

    cartItem.appendChild(cartInfoItem);
    itemsArea.appendChild(cartItem);

}

function getCart(){
    
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
        shoppingCart = getCart();
    }
});

addItemBtn.addEventListener("click", (ev) =>{

    validate(db, auth);

});

getItems();
