import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";

const auth = getAuth();

const loginForm = document.getElementById("form_login");

let email;
let password;

loginForm.addEventListener("submit", (ev) => {

ev.preventDefault();

email = document.getElementById("form_login_email").value;
password = document.getElementById("form_login_password").value;

login(email, password);

});

async function login(email, password){

    try{

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful");

    }

    catch(error){

        console.log(error);

        if(error.code === "auth/user-not-found"){

            alert("User not found");

        }

        if(error.code === "auth/wrong-password"){

            alert("Email or password are incorrect");

        }

    }

}