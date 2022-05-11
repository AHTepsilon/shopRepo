import { doc, onSnapshot, getDoc } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";

function validate(db, auth){
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

}

export{

    validate

}

