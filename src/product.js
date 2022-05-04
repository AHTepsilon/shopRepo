import { getDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {getProduct} from "./utils/getProduct";

import { getProduct } from "./utils/getProduct";
import { addToCart } from "./specs";
import { createFirebaseCart } from "./utils/cartFunction";

const db = getFirestore(app);
const auth = getAuth();

const productAssestsArea = document.getElementById("product_assets");
const productInfoArea = document.getElementById("product_info");

let userHasLoggedIn = undefined;
let shoppingCart = [];


function getParam(param){

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;

}

async function loadProduct(){

    const productId = getParam("id");
    const data = await getProduct(productId);


    const product = {
        ...data,
        id: productId
    }

    renderProduct(product);

}

function renderProduct(product){

    productAssestsArea.innerHTML = `
    
    <img class="product_image" id="pImage" src="${product.images[0]}">

    `;

    const cartHasProducts = shoppingCart.some((productCart) =>{

        productCart.id === product.id;

    });


    const addToCartBtnEnable = cartHasProducts ? 
    `<button class="add_cart_button" id="add_cart_button">Product added to cart</button>` :
    `<button class="add_cart_button" id="add_cart_button">Add to cart</button>` ;

    productInfoArea.innerHTML = `

        <h1 class="product_name">
        ${product.nameValue}
        </h1>
        <p class="product_desc">
        lorem ipsum
        </p>
        <h3 class="product_price">
        ${product.price}
        </h3>
        ${addToCartBtnEnable}

    `;

    const productCart = productInfoArea.querySelector(".product_cart");

    productCart.addEventListener("click", (ev) =>{

    shoppingCart.push(product);
    addToCart(shoppingCart);

    if(userHasLoggedIn){

        createFirebaseCart(db, userHasLoggedIn.uid, shoppingCart);

    }

    productCart.setAttribute("disabled", true);
    productCart.innerHTML = "Product added to cart";

});

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

loadProduct();