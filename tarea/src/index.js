
let shoppingCartBtn = document.getElementById("navbar__icons_button");

shoppingCartBtn.addEventListener("click",(ev) =>{

    window.open(shoppingCart.html);

});

let user = {
    name: "John",
    email: "johntodd@gmail.com",
    gender: "male"
};


let products = [

    {
        instrument: "Guitar",
        manufacturer: "Fender",
        body: "Stratocaster",
        price: 30000,
        color: "Red",
        stock: true,
        image: "../product/AX120"
    },

    {
        instrument: "Guitar",
        manufacturer: "Gibson",
        body: "Les Paul",
        price: 40000,
        color: "Black",
        stock: false
    },

    {
        instrument: "Bass",
        manufacturer: "Fender",
        body: "Les Paul",
        price: 20000,
        color: "Black",
        stock: false
    },

    {
        instrument: "Guitar",
        manufacturer: "Fender",
        body: "Telecaster",
        price: 70000,
        color: "Sunburst",
        stock: true
    },

    {
        instrument: "Guitar",
        manufacturer: "Peavey",
        body: "Offset",
        price: 90000,
        color: "Blue",
        stock: false
    },

    {
        instrument: "Bass",
        manufacturer: "Rickenbacker",
        body: "S-cut",
        price: 40000,
        color: "Purple",
        stock: true
    }
];


let divProducts = document.getElementById("section_products_from_js");

products.forEach((product)=>{
    if(product.price > 50000 || product.stock){
        console.log(product);
    } 

    //const {instrument, manufacturer, body, price, color, stock}

    let productdiv = document.createElement("div");

    const stockLabel = product.stock ? "ON STOCK" : "NOT ON STOCK";

    productdiv.innerHTML = `

    <h1>${product.manufacturer}</h1>
    <h3>${product.instrument}</h3>
    <h4>${product.body}</h4>
    <p>${product.color}</p>
    <p>${product.price}</p>
    <p>${stockLabel}</p>

    `

    divProducts.appendChild(productdiv);
});