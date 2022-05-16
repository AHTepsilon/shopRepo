import { jsPDF } from "jspdf";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "./firebase_app";
import { getFirestore } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { getFirebaseCart} from "./utils/cartFunction";

const billingInfoForm = document.getElementById("billing_info_div_form");
const paymentInfoDiv = document.getElementById("payment_info_div_credit_card_form");
const proceedBtn = document.getElementById("next_confirm_button");

const db = getFirestore(app);
const auth = getAuth();

let cart = [];

let fName, lName, mail, add, pNumb, zip;
let ccNum, ccName, ccDate, ccCode;

let totalToPay = 0;
let userId;


const receipt = new jsPDF({

    orientation: "vertical",
    units: "mm",
    format: [215, 275]

});

let dataArr = [];

function getCartData(cart, id){

    let total = 0;
    cart.forEach(item =>{

        total += parseInt(item.price);

    });
    getTotalAndId(total, id)
}

function getTotalAndId(total, id){

    console.log(total + " " + id);

    totalToPay = total;
    userId = id;

}

proceedBtn.addEventListener("click", ev=>{

    fName = billingInfoForm.firstName.value;
    lName = billingInfoForm.lastName.value;
    mail = billingInfoForm.email.value;
    add = billingInfoForm.address.value;
    pNumb = billingInfoForm.phoneNumber.value;
    zip = billingInfoForm.zipCode.value;

    ccNum = paymentInfoDiv.ccNumber.value;
    ccName = paymentInfoDiv.nameCard.value;
    ccDate = paymentInfoDiv.expDate.value;
    ccCode = paymentInfoDiv.ccv.value;

    dataArr = [fName, lName, mail, add, pNumb, zip, ccNum, ccName, ccDate, ccCode];

        if(dataArr.includes("")){

            alert("Please fill in all the fields to proceed");

        }
        else{

            alert("Payment performed successfully!");
            console.log(dataArr);

            receipt.text("\n" + "Buyer's name: " + fName + "\n" + "Buyer's last name: " + lName + "\n" + "Email: " + mail + "\n" + "Shipping Address: " + add + "\n" + "Phone Number: " + pNumb + "\n" + "Zip Code: " + zip + "\n" + "\n" + "Total Payed: " + totalToPay + ".00$" + "\n" + "Delivery ID: " + userId, 1, 1);

            receipt.save("Receipt.pdf");

            if(userHasLoggedIn){
                deleteDoc(doc(db, "cart", userHasLoggedIn.uid));
            }
        }

});

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userHasLoggedIn = user;
      cart = await getFirebaseCart(db, userHasLoggedIn.uid);
      // ...
    } else {
      // User is signed out
      // ...
    }

    getCartData(cart, userHasLoggedIn.uid);

  });