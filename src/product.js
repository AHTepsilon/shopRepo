
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "./firebase_app";
import { getFirestore } from "firebase/firestore";
import {getProduct} from "./utils/getProduct";
import { getCart } from "./itemShowcase";
import {createFirebaseCart, getFirebaseCart} from "./utils/cartFunction";
import { validate } from "./specs/addProductsValidation";

const db = getFirestore(app);
const auth = getAuth();

let userHasLoggedIn = undefined;
let cart = [];

const productAssestsArea = document.getElementById("product_assets");
const productInfoArea = document.getElementById("product_info");

const addItemBtn = document.getElementById("navbar__addItem__a");

function getParam(param){

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;

}

async function loadProduct(){

    const productId = getParam("id");
    const data = await getProduct(productId);


    const product = {
        ...data,
        id: productId
    }

    renderProduct(product);

}

function renderProduct(product){

    productAssestsArea.innerHTML = `
    
    <img class="product_image" id="pImage" src="${product.images[0]}">

    `;

    const isProductInCart = cart.some((productCart) => productCart.id === product.id);

    const productButtonCart = isProductInCart ?
    
    `<button class="product_cart" disabled>Product added to cart</button>` :
    `<button class="product_cart">Add to cart</button>`
    ;

    productInfoArea.innerHTML = `

        <h1 class="product_name">
        ${product.nameValue}
        </h1>
        <p class="product_desc">
        lorem ipsum
        </p>
        <h3 class="product_price">
        ${product.price}.00$
        </h3>

        <button class="showcase__button">Go to showcase</button>
        ${productButtonCart}

    `;

    const addToCartButton = document.querySelector(".product_cart");
    addToCartButton.addEventListener("click", (ev) =>{

        cart.push(product);

        if(userHasLoggedIn){
            createFirebaseCart(db, userHasLoggedIn.uid, cart);
        }

        addToCartButton.setAttribute("disabled", true);
        addToCartButton.innerText = "Product added to cart";
    });

    const goShowcase = document.querySelector(".showcase__button");
    goShowcase.addEventListener("click", (ev) =>{

        

        if(product.instrument == "Guitar"){
            window.location.href= "https://ahtepsilon.github.io/virtual_guitar_game/game/index.html";
        }else if(product.instrument == "Bass"){
            window.location.href= "https://ahtepsilon.github.io/virtual_guitar_game/game/bass.html";
        }

        
    });

}

addItemBtn.addEventListener("click", (ev) =>{

    validate(db, auth);

});

onAuthStateChanged(auth, async (user) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          userHasLoggedIn = user;
          cart = await getFirebaseCart(db, userHasLoggedIn.uid);
          console.log(cart);
          // ...
        } else {
            cart = getCart();
          // User is signed out
          // ...
        }
    
        loadProduct();
    
      });
})