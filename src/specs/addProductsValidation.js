import { app } from "../firebase_app"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

import { doc, onSnapshot, getDoc } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";

const addItemBtn = document.getElementById("navbar__addItem__a");

const auth = getAuth();
const db = getFirestore(app);

addItemBtn.addEventListener("click", ev =>{

    onAuthStateChanged(auth, (user) => {

        if (user) {
            const uid = user.uid;
            
            getDoc(doc(db, "users", uid)).then((docSnap) => {

                const result = docSnap.data();

                console.log(result.admin);

                if(result.admin){

                    window.location.href = "./addItems.html"

                }

                else{

                    alert("Only administrators can add items");

                }
            });

        } else {
          
            alert("Only administrators can add items");
      
        }
      });

});

/*async function getUser(db, userId){

    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return result;

}*/

