import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "../firebase_app";
import {app} from "../firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

import { productArr, displayItems, itemsArea } from "../itemShowcase";

const db = getFirestore(app);

const filterForm = document.getElementById("category_changer");

const filterFormInstrument = document.getElementById("instrument-querier");
const filterFormManufacturer = document.getElementById("manufacturer-querier");
const filterFormBody = document.getElementById("body-querier");
const filterFormColor = document.getElementById("color-querier");

function filterIt(){

    filterFormInstrument.addEventListener("change", (ev) =>{

        console.log(ev);

        const newChangeInst = filterFormInstrument.value;

        let categoryToFilter;
        let filteredItems = [];

        if(newChangeInst !== "Any"){
            
            (newChangeInst == "Guitars") ? categoryToFilter = "Guitar" : null;
            (newChangeInst == "Basses") ? categoryToFilter = "Bass" : null;
            (newChangeInst == "Amps") ? categoryToFilter = "Amp" : null;
            (newChangeInst == "Accesories") ? categoryToFilter = "Accesory" : null;
    
            filteredItems = productArr.filter((item) => item.instrument === categoryToFilter);
    
            console.log(filteredItems);
        }

        else{

            filteredItems = productArr;

        }

        itemsArea.innerHTML = "";
    
        filteredItems.forEach((item) => {

            displayItems(item);
            
        });


    });

    filterFormManufacturer.addEventListener("change", (ev) =>{

        const newChangeMan = filterFormManufacturer.value;
        let filteredItems = [];

        console.log(newChangeMan);

        (newChangeMan !== "Any") ?
         filteredItems = productArr.filter((item) => item.manufacturer === newChangeMan) :
          filteredItems = productArr;

        itemsArea.innerHTML = "";
    
        filteredItems.forEach((item) => {
  
            displayItems(item);
              
        });

        console.log(filteredItems);

    });

    filterFormBody.addEventListener("change", (ev) =>{

        const newChangeBod = filterFormBody.value;
        let filteredItems = [];

        (newChangeBod !== "Any") ?
         filteredItems = productArr.filter((item) => item.body === newChangeBod) :
          filteredItems = productArr;

        itemsArea.innerHTML = "";
    
        filteredItems.forEach((item) => {
  
            displayItems(item);
              
        });

        console.log(filteredItems);

    });
    
    filterFormColor.addEventListener("change", (ev) =>{

        const newChangeCol = filterFormColor.value;
        let filteredItems = [];

        (newChangeCol !== "Any") ?
         filteredItems = productArr.filter((item) => item.color === newChangeCol) :
          filteredItems = productArr;

        itemsArea.innerHTML = "";
    
        filteredItems.forEach((item) => {
  
            displayItems(item);
              
        });

        console.log(filteredItems);

    });

    filterForm.addEventListener("submit", (ev)=>{

        

    });

}

export{
    filterIt
}