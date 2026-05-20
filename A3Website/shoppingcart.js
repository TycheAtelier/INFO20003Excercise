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

const initApp = () => {
//take data from JSON file
   fetch('products.json')
   then(response => response.json)
   then(data => {})
      listProducts = data;
      console.log(listProducts);
}

initApp