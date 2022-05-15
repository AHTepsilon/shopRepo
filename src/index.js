import { doc, onSnapshot,  getFirestore, setDoc, getDoc, collection } from "firebase/firestore";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getProducts } from "./utils/collectionReef";

const productSection = document.getElementById("section__new_deals_div_product_showcase");
const db = getFirestore(app);

async function fetchProducts(){

    await getProducts(db);

}

fetchProducts();