import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase_app";
import { getFirestore } from "firebase/firestore";
import { fetchItems } from "../utils/item";
import { getItems, displayItems, getCart } from "../itemShowcase";
import { getFirebaseCart } from "../utils/cartFunction";
import { validate } from "../specs/addProductsValidation";
import { filterIt } from "../utils/categoryFiltering";

const db = getFirestore(app);
const auth = getAuth();

const itemsArea = document.getElementById("section__new_deals_div_product_showcase");
const userButton = document.getElementById("user_button");
const addItemBtn = document.getElementById("navbar__addItem__a");

let userHasLoggedIn = undefined;
let productArr = [];
let shoppingCart = [];

async function loadProducts() {
    const products = await getItems(db);

    products.forEach(product =>{
        displayItems(product, shoppingCart, itemsArea);
    });
}

onAuthStateChanged(auth, async (user) =>{
    if(user){
        userHasLoggedIn = user;
        shoppingCart = await getFirebaseCart(db, userHasLoggedIn.uid);
    }
    else{
        shoppingCart = getCart();
    }

    loadProducts();
});


userButton.addEventListener("click", ()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
      
          const auth = getAuth();
          signOut(auth).then(() => {

            window.location.href = "./index.html";
            alert("Signed out succesfully");
            
          }).catch((error) => {
           
            console.log(error);

          });
      
        } else {
          
            window.location.href = "./loginPage.html";
      
        }
      });

});

addItemBtn.addEventListener("click", (ev) =>{

    validate(db, auth);

});

filterIt(itemsArea, productArr);