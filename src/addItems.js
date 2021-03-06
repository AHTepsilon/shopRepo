import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig, firebase} from "./firebase_app";
import {app} from "./firebase_app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const db = getFirestore(app);
const storage = getStorage(app);

const addItemsForm = document.getElementById("form_addItems");

let nameValue, instrument, manufacturer, body, price, color, strings, material, image, id;


addItemsForm.addEventListener("submit", async (ev) => {

    ev.preventDefault();

    nameValue = document.getElementById("form_addItems_name").value;
    instrument = document.getElementById("form_addItems_instrument").value;
    manufacturer = document.getElementById("form_addItems_manufacturer").value;
    body = document.getElementById("form_addItems_body").value;
    price = document.getElementById("form_addItems_price").value;
    color = document.getElementById("form_addItems_color").value;
    strings = document.getElementById("form_addItems_strings").value;
    material = document.getElementById("form_addItems_material").value;
    image = document.getElementById("form_addItems_image").files;

    let gallery = [];

    if(image.length){

      const upImages = await uploadImage(storage, [...image]);

      gallery = await Promise.all(upImages);

      console.log(upImages);
    }

    id = await generateId();

    console.log(nameValue + ", " + instrument + ", " + manufacturer + ", " + body + ", " + price + ", " + color+ ", " + strings + ", " + material + ", " + image + "," + id);

    const newItem = {

        nameValue, 
        instrument, 
        manufacturer, 
        body, 
        price, 
        color, 
        strings, 
        material,
        images: gallery,
        id

    }

    await addItemToDatabase(db, newItem.nameValue, newItem.manufacturer, newItem.body, newItem.id,  newItem);

});

async function addItemToDatabase(db, nameValue, manufacturer, body, id, itemSpecs){
      
      try{

        await setDoc(doc(db, "items", id), itemSpecs);

        alert("Item added succesfully");
      }

      catch(error){

        console.log(error);

      }
}

async function imageUploadRef(storage, image){

  const storRef = ref(storage, `products/images/${image.name}`);
  return await uploadBytes(storRef, image);

}

async function uploadImage(storage, images = []){

  console.log(images);
  const imagesUploaded = images.map(async (img) =>{

    const imageRef = await imageUploadRef(storage, img);

    return getDownloadURL(ref(storage, imageRef.ref.fullPath));

  });

  return imagesUploaded;

}

async function generateId(){

  let id = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678901234567890123456789";

  for(let i = 0; i < 10; i++) {

    id += chars.charAt(Math.floor(Math.random() * 30));

  }

  return id;

}