import { getFirestore,  doc, setDoc } from "firebase/firestore";

export class ProductDiv{

    constructor(item){

        this.item = item;

    }

    render(){

        let createdDiv = document.createElement("div");
        createdDiv.className = "product";

        createdDiv.innerHTML = `
        
        <div class="section__new_deals_div_product_showcase_text">

            <h2 class="product_price">${this.item.price}.99$</h2>
            <p class="product_name">${this.item.nameValue}</p>

        </div>

        <img src="" class="guitarPhoto">

        `

        return createdDiv;
    }

}