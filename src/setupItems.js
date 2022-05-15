
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { getStorage } from "firebase/storage";

const storage = getStorage(app);

async function addProduct(db, item){
    try{     
        await addDoc(collection(db, "items"), item);
    }
    catch(e){
        console.log(e);
    }
}

async function imageUpload(storage, image){

    const storageRef = ref(storage, ``);

}