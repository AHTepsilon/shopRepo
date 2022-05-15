import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "../firebase_app";
import {app} from "../firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function fetchItems(db){

    try{
        const collectionRef = collection(db, "items");
        const { docs } = await getDocs(collectionRef);
        const firebaseProducts = docs.map((doc) =>{

            //console.log(doc);
    
            return{
    
                ...doc.data(),
    
            };
    
        });
    
        return firebaseProducts;

    } catch(e){

        console.log(e);

    }


}

export{

    fetchItems

}