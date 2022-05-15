import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "../firebase_app";
import {app} from "../firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDoc } from "firebase/firestore";

import { fetchItems } from "../utils/item";
const db = getFirestore(app);

async function getProduct(id){

    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef, "items");
    const data = docSnap.data();

    return data;
}

export{
    getProduct
}