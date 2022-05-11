import { getFirestore } from "firebase/firestore";

import {displayItems, itemsArea } from "../itemShowcase";
const filterForm = document.getElementById("category_changer");

const filterFormInstrument = document.getElementById("instrument-querier");
const filterFormManufacturer = document.getElementById("manufacturer-querier");
const filterFormBody = document.getElementById("body-querier");
const filterFormColor = document.getElementById("color-querier");

let filterProductsInstMan = [];
let filterProductsBodCol = [];
let filterProducts;

function filterIt(itemsArea, productArr){

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

            itemsArea.innerHTML = "";

            filterProductsInstMan = instrumentArr.filter(v => manufacturerArr.includes(v));
            filterProductsBodCol = bodyArr.filter(v => colorArr.includes(v));

            filterProducts = filterProductsInstMan.filter(v => filterProductsBodCol.includes(v));

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