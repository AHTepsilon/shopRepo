async function addToCart(){

    localStorage.setItem("cart", JSON.stringify(shoppingCart));


}

function getLocalCart(){
    
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
}

export{

    addToCart,
    getLocalCart

}