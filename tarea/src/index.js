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
        stock: true
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

    let productdiv = document.createElement("div");

    let productBrand = document.createElement("h1");
    productBrand.innerHTML = product.manufacturer;

    let productInstrument = document.createElement("h3");
    productInstrument.innerHTML = product.instrument;

    let productBody = document.createElement("h4");
    productBody.innerHTML = product.body;

    let productColor = document.createElement("p");
    productColor.innerHTML = product.color;

    let productPrice = document.createElement("p");
    productPrice.innerHTML = product.price;

    let productStock = document.createElement("p");

    if(product.stock){
        productStock.innerHTML = "ON STOCK";
    }
    else{
        productStock.innerHTML = "NOT ON STOCK";
    }

    productdiv.appendChild(productBrand);
    productdiv.appendChild(productInstrument);
    productdiv.appendChild(productBody);
    productdiv.appendChild(productColor);
    productdiv.appendChild(productPrice);
    productdiv.appendChild(productStock);

    divProducts.appendChild(productdiv);
});