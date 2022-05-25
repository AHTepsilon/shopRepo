import { getFirestore } from "firebase/firestore";
import _, { map } from 'underscore';

import {displayItems, itemsArea } from "../itemShowcase";
const filterForm = document.getElementById("category_changer");
const sortIt = document.getElementById("sort_div");

const filterFormInstrument = document.getElementById("instrument-querier");
const filterFormManufacturer = document.getElementById("manufacturer-querier");
const filterFormBody = document.getElementById("body-querier");
const filterFormColor = document.getElementById("color-querier");

const sortSelect = document.getElementById("sorter");

let filterProductsInstMan = [];
let filterProductsBodCol = [];
let filterProducts = [];

let categoryToFilter;

function filterIt(itemsArea, productArr){

    filterForm.addEventListener("submit", (ev)=>{

        ev.preventDefault();

        const newCatInstrument = filterFormInstrument.value;
        const newCatManufacturer = filterFormManufacturer.value;
        const newCatBody = filterFormBody.value;
        const newCatColor = filterFormColor.value;
        const sortSelectValue = sortSelect.value;

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

            itemsArea.innerHTML = "";

            filterProductsInstMan = instrumentArr.filter(v => manufacturerArr.includes(v));
            filterProductsBodCol = bodyArr.filter(v => colorArr.includes(v));

            filterProducts = filterProductsInstMan.filter(v => filterProductsBodCol.includes(v));

            filterProducts.forEach(item =>{

                console.log(item.nameValue);

            });

            if(sortSelectValue == "AlphabA"){
                filterProducts = _.sortBy(filterProducts, "nameValue");
            }

            if(sortSelectValue == "AlphabZ"){
                filterProducts = _.sortBy(filterProducts, "nameValue").reverse();
            }

            if(sortSelectValue == "PriceH"){
                filterProducts = filterProducts.sort((a, b) => b.price - a.price);
            }

            if(sortSelectValue == "PriceL"){
                filterProducts = filterProducts.sort((a, b) => a.price - b.price);
            }

            if(sortSelectValue == "Manufacturer"){
                filterProducts = _.sortBy(filterProducts, "manufacturer");
            }

            if(sortSelectValue == "Body"){
                filterProducts = _.sortBy(filterProducts, "body");
            }


            //console.log(filterProducts);
                
            filterProducts.forEach((item) => {
    
                displayItems(item, filterProducts, itemsArea);
                
            });

    });

}

export{
    filterIt,
    filterProducts
}