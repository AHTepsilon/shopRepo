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

let filterProductsInstMan = [];
let filterProductsBodCol = [];
let filterProducts;

function filterIt(){

    /*filterFormInstrument.addEventListener("change", (ev) =>{

        console.log(ev);

        const newChangeInst = filterFormInstrument.value;

        let categoryToFilter;
        let filteredItems = [];

        if(newChangeInst !== "Any") {
            
            (newChangeInst == "Guitars") ? categoryToFilter = "Guitar" : null;
            (newChangeInst == "Basses") ? categoryToFilter = "Bass" : null;
            (newChangeInst == "Amps") ? categoryToFilter = "Amp" : null;
            (newChangeInst == "Accesories") ? categoryToFilter = "Accesory" : null;
    
            filteredItems = productArr.filter((item) => item.instrument === categoryToFilter);
    
            console.log(filteredItems);
        }

        else {

            filterProducts = productArr;

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
        filterProducts = productArr.filter((item) => item.manufacturer === newChangeMan) :
          filteredItems = productArr;

        itemsArea.innerHTML = "";
    
        filterProducts.forEach((item) => {
  
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

    });*/

    filterForm.addEventListener("submit", (ev)=>{

        ev.preventDefault();

        const newCatInstrument = filterFormInstrument.value;
        const newCatManufacturer = filterFormManufacturer.value;
        const newCatBody = filterFormBody.value;
        const newCatColor = filterFormColor.value;

        let instrumentArr = [];
        let manufacturerArr = [];
        let bodyArr = [];
        let colorArr = [];

            if(newCatInstrument == "Any"){

                instrumentArr = productArr;

            }

            else if(newCatInstrument !== "Any"){

                (newCatInstrument == "Guitars") ? categoryToFilter = "Guitar" : null;
                (newCatInstrument == "Basses") ? categoryToFilter = "Bass" : null;
                (newCatInstrument == "Amps") ? categoryToFilter = "Amp" : null;
                (newCatInstrument == "Accesories") ? categoryToFilter = "Accesory" : null;

                instrumentArr = productArr.filter((item) => item.instrument === categoryToFilter);

            }

            if(newCatManufacturer == "Any"){

                manufacturerArr = productArr

            }

            else if(newCatManufacturer !== "Any"){

                manufacturerArr = productArr.filter((item) => item.manufacturer === newCatManufacturer);

            }

            if(newCatBody == "Any"){

                bodyArr = productArr;

            }

            else if(newCatBody !== "Any"){

                bodyArr = productArr.filter((item) => item.body === newCatBody);

            }

            
            if(newCatColor == "Any"){

                colorArr = productArr;

            }

            else if(newCatColor !== "Any"){

                colorArr = productArr.filter((item) => item.color === newCatColor);

            }

            /*console.log(instrumentArr);
            console.log(manufacturerArr);
            console.log(bodyArr);
            console.log(colorArr);*/

            itemsArea.innerHTML = "";

            filterProductsInstMan = instrumentArr.filter(v => manufacturerArr.includes(v));
            filterProductsBodCol = bodyArr.filter(v => colorArr.includes(v));

            filterProducts = filterProductsInstMan.filter(v => filterProductsBodCol.includes(v));

            console.log(filterProductsInstMan);
            console.log(filterProductsBodCol);

            console.log(filterProducts);

                
            filterProducts.forEach((item) => {
    
                displayItems(item);
                
            });

    });

}

export{
    filterIt,
    filterProducts
}