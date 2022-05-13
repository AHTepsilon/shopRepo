import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirebaseCart, createFirebaseCart} from "./utils/cartFunction";
import { addToCart, displayItems, getCart } from "./itemShowcase";
import { doc, onSnapshot,  getFirestore, setDoc, getDoc, collection } from "firebase/firestore";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";

const cartArea= document.getElementById("item_list");
const totalArea = document.getElementById("final_price");
let shoppingCart = [];

const db = getFirestore(app);
const auth = getAuth();

function loadCart(cart){

    let total = 0;
    cart.forEach(item =>{

        displayIt(item);
        total += parseInt(item.price);

    });
    
    totalArea.innerText = total.toString()  + ".00$";
}

async function removeIt(id){

    const newCart = shoppingCart.filter(item => item.id !== id);

    shoppingCart = newCart;

    if(userHasLoggedIn){

        await createFirebaseCart(db, userHasLoggedIn.uid, newCart);

    }

    addToCart(newCart);

    cartArea.innerHTML = "";

    loadCart(newCart);

}

function displayIt(product){

    const productCart = document.createElement("li");
    productCart.className = "product";
    productCart.innerHTML =
    `
    <img src="${product.images[0]}" class="product_image">
    <h2 class="product_name">${product.nameValue}</h2>
    <h3 class="product_price">${product.price}.00$</h3>
    <button class="product_delete">X</button>
    `;

    cartArea.appendChild(productCart);

    productCart.addEventListener("click", ev =>{

        if(ev.target.tagName === "BUTTON"){

            console.log("removed");
            removeIt(product.id);
        }

    });

}

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userHasLoggedIn = user;
      shoppingCart = await getFirebaseCart(db, userHasLoggedIn.uid);
    } else {
        shoppingCart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadCart(shoppingCart);

  });