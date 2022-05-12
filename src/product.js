import { getDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {getProduct} from "./utils/getProduct";
import { validate } from "./specs/addProductsValidation";

const db = getFirestore(app);

const productAssestsArea = document.getElementById("product_assets");
const productInfoArea = document.getElementById("product_info");

const addItemBtn = document.getElementById("navbar__addItem__a");

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

    productInfoArea.innerHTML = `

        <h1 class="product_name">
        ${product.nameValue}
        </h1>
        <p class="product_desc">
        lorem ipsum
        </p>
        <h3 class="product_price">
        ${product.price}.00$
        </h3>
        <button class="product_cart">Add to cart</button>

    `;

}

addItemBtn.addEventListener("click", (ev) =>{

    validate(db, auth);

});

loadProduct();