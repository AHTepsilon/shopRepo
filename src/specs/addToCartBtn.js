import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "../firebase_app";
import {app} from "../firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import { fetchItems } from "../utils/item";

import { addCartBtn } from "../itemShowcase";


const db = getFirestore(app);
