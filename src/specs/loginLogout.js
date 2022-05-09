import { app } from "../firebase_app"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

const userButton = document.getElementById("user_button");

const auth = getAuth();

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