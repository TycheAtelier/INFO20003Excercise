let iconCart = document.querySelector('.addCart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener("click", () => {
    body.classList.add('showCart')
    })

closeCart.addEventListener("click", () => {
   body.classList.remove('showCart')
})

let products = [
    {
        "id": 1,
        "itemName": "ACID NEUTRAL PVA",
        "itemPrices": 10,
        "image": "adhesiveproduct1.png"
    },

    {
        "id": 2,
        "itemName": "PEARL ANIMAL GLUE",
        "itemPrices": 10,
        "image": "adhesiveproduct2.png"
    },



    {
        "id": 3,
        "itemName": "PHOTO CORNERS",
        "itemPrices": 10,
        "image": "adhesiveproduct3.png"
    },



    {
        "id": 4,
        "itemName": "BUCKRAM",
        "itemPrices": 10,
        "image": "buckram.png"
    },



    {
        "id": 5,
        "itemName": "AKA PAD",
        "itemPrices": 10,
        "image": "akapad.png"
    },



    {
        "id": 6,
        "itemName": "AKA PAD - WHITE",
        "itemPrices": 10,
        "image": "akapad2.png"
    },



    {
        "id": 7,
        "itemName": "DOCUMENT CLEANING PAD",
        "itemPrices": 10,
        "image": "cleaningpad1.png"
    },



    {
        "id": 8,
        "itemName": "GOAT HAIR HAKE BRUSH",
        "itemPrices": 10,
        "image": "brush1.png"
    }
]