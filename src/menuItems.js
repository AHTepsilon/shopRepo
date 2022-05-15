import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase_app";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);
const auth = getAuth();

menuItemLoginButton = document.getElementById("user_button");

menuItemLoginButton.addEventListener("click", ev =>{

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