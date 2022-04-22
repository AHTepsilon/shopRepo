import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

const addItemsForm = document.getElementById("form_addItems");

let nameValue, instrument, manufacturer, body, price, color, strings, material;


addItemsForm.addEventListener("submit", async (ev) => {

    ev.preventDefault();

    nameValue = document.getElementById("form_addItems_name").value;
    instrument = document.getElementById("form_addItems_instrument").value;
    manufacturer = document.getElementById("form_addItems_manufacturer").value;
    body = document.getElementById("form_addItems_body").value;
    price = document.getElementById("form_addItems_price").value;
    color = document.getElementById("form_addItems_color").value;
    strings = document.getElementById("form_addItems_strings").value;
    material = document.getElementById("form_addItems_material").value;

    console.log(nameValue + ", " + instrument + ", " + manufacturer + ", " + body + ", " + price + ", " + color+ ", " + strings + ", " + material);

    const newItem = {

        nameValue, 
        instrument, 
        manufacturer, 
        body, 
        price, 
        color, 
        strings, 
        material

    }

    await addItemToDatabase(db, newItem.nameValue, newItem.manufacturer, newItem.body, newItem);

});

async function addItemToDatabase(db, nameValue, manufacturer, body, itemSpecs){
      
      try{

        await setDoc(doc(db, "items", manufacturer, body, nameValue), itemSpecs);

      }

      catch(error){

        console.log(error);

      }
}