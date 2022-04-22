import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth();

const db = getFirestore(app);

const registerForm = document.getElementById("form_register");

let username;
let nameValue;
let lastName;
let email;
let phoneNumber;
let password;


registerForm.addEventListener("submit", async (ev) => {

    ev.preventDefault();

    username = document.getElementById("form_register_username").value;
    nameValue = document.getElementById("form_register_name").value;
    lastName = document.getElementById("form_register_lastName").value;
    email = document.getElementById("form_register_email").value;
    phoneNumber = document.getElementById("form_register_phoneNumber").value;
    password = document.getElementById("form_register_password").value;

    console.log(username + ", " + nameValue + ", " + lastName + ", " + email + ", " + phoneNumber + ", " + password);

    const newUser = {

        username,
        nameValue,
        lastName,
        email, 
        phoneNumber,
        password

    }

    const { user } = await createUser(newUser.email, newUser.password);

    await addUserToDatabase(db, user.uid, newUser);

});

async function createUser(email, password){

    try{
        const newUser = await createUserWithEmailAndPassword(auth, email, password);

        return newUser;

        console.log(newUser);
    }
    
    catch(error){

        console.log(error);

        if(error.code === "auth/weak-password"){

            alert("Password must be at least 6 characters long");

        }

        if(error.code === "auth/email-already-in-use"){

            alert("That email is already in use");

        }

    }
}

async function addUserToDatabase(db, userId, userInfo){
      
      try{

        await setDoc(doc(db, "users", userId), userInfo);

      }

      catch(error){

        console.log(error);

      }
}