import { doc, onSnapshot,  getFirestore, setDoc } from "firebase/firestore";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";