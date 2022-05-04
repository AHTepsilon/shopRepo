import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "../firebase_app";
import {app} from "../firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import { fetchItems } from "../utils/item";

import { addCartBtn } from "../itemShowcase";


const db = getFirestore(app);

async function createFirebaseCart(db, userId, cart){

    try {
        await setDoc(doc(db, "cart", userId), {
            cart
        });

    }

    catch(e){

        console.log(e);

    }

}

async function getFirebaseCart(db, userId){

    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return (result) ? result.cart : [];

}

export{

    createFirebaseCart,
    getFirebaseCart

}