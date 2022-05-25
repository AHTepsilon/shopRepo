import { collection, getDocs } from "firebase/firestore";

async function getProducts(db){

    const collectionRef = collection(db, "items");
    const {docs} = await getDocs(collectionRef);

    const firebaseProducts = docs.map((doc) =>{

        return {...doc.data()}

    });

    console.log(firebaseProducts);

}

export{

    getProducts

}