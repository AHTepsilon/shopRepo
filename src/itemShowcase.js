import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import { fetchItems } from "./utils/item";

import { filterIt } from "./utils/categoryFiltering";


const db = getFirestore(app);

const itemsArea = document.getElementById("section__new_deals_div_product_showcase");

let productArr = [];

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

    product.innerHTML = `
    
    <div class="section__new_deals_div_product_showcase_text">
    <h2 class="product_price" id="product_price">${item.price}.00$</h2>
    <p class="product_name" id="product_name">${item.nameValue}</p>
    </div>
    <img src="${placeholder}" alt="product_pic" class="product_image guitarPhoto" id="product_image">
    <button class="add_cart_button" id="add_cart_button">Add to cart</button>

    `;

    itemsArea.appendChild(product);

}

let addCartBtn = document.querySelector(".add_cart_button");

addCartBtn.addEventListener("click", (ev)=>{

    ev.preventDefault();
    console.log(ev);

});

export{

    productArr,
    displayItems,
    itemsArea,
        
}
getItems();

//filterIt();