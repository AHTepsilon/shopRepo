import { doc, onSnapshot,  getFirestore, setDoc, getDoc, collection } from "firebase/firestore";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export{

    app,
    auth,
    db

}


