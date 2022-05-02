import { getDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

const productAssestsArea = document.getElementById("product_assets");
const productInfoArea = document.getElementById("product_info");


function getParam(){

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;

}

async function getProduct(){

    const productId = getParam("id");
    const docRef = doc(db, "items", id);

    try{
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

    }

    catch(e){

        console.log(e);
    }


    const product = {
        ...data,
        id: productId
    }

    renderProduct(product);

}

function renderProduct(product){

productAssestsArea.innerHTML = `

    <h1 class="product_name">
    ${product.nameValue}
    </h1>
    <p class="product_desc">
    lorem ipsum
    </p>
    <h3 class="product_price">
    ${product.price}
    </h3>
    <button class="product_cart">Add to cart</button>

`;

}

getProduct("id");