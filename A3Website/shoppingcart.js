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


// Desktop Version - Open Cart 
let iconCartDT = document.querySelector('.desktopAddCart');

iconCartDT.addEventListener("click", () => {
    body.classList.add('showCart')
    })

closeCart.addEventListener("click", () => {
   body.classList.remove('showCart')
})

//Functional Shopping Cart

const addCartButtons = document.querySelectorAll(".addCart");
addCartButtons.forEach (button => {
    button.addEventListener("click", event => {
        const listProduct = event.target.closest (".listProduct");
        addToCart(listProduct);
    });
});

const cartContent = document.querySelector(".listCart")
const addToCart = listProduct => {
    const productImgSrc = listProduct.querySelector ("img").src;
    const productTitle = listProduct.querySelector (".product-title").textContent;
    const productPrice = listProduct.querySelector (".price").textContent;

    const cartItems = cartContent.querySelectorAll (".name");
    for (let item of cartItems) {
        if (item.textContent.trim() === productTitle.trim()) {
            alert("This item is already in the cart.");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("item")
    cartBox.innerHTML = `
                <img src="${productImgSrc}" class="image">
                <p class="name"> ${productTitle} </p>
                <span class="totalPrice"> ${productPrice} </span>
                <div class="quantity">
                    <button id="minus"> - </button> 
                    <span class="cart-quantity"> 1 </span> 
                    <button id="plus"> + </button> 
                </div>
         <button class="cart-remove"> REMOVE </button>

    `;
    cartContent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();
        
        updateTotalPrice();

        updateCartCount(-1);
    });

    
    cartBox.querySelector(".quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".cart-quantity");
        const decreaseButton = cartBox.querySelector("#minus");
        let quantity = numberElement.textContent;

        if (event.target.id === "minus" && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decreaseButton.style.backgroundColor="#501313";
            }
         } else if (event.target.id === "plus") {
                quantity++;
                decreaseButton.style.backgroundColor = "#525e42";
            }
        
            numberElement.textContent = quantity;

            updateTotalPrice();
});

updateCartCount(1);

updateTotalPrice();

} 

// Calc Total 

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".item");
    let total = 0; 
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".totalPrice");
        const quantityElement = cartBox.querySelector(".cart-quantity");
        const price = priceElement.textContent.replace ("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    })
    totalPriceElement.textContent = `$${total}`;
}


let cartItemCount = 0; 
const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-quantity");
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
};

const buyNowButton = document.querySelector(".checkOut");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".item");
    if (cartBoxes.length === 0) {
        alert("Cart Empty. Please add item to purchase.");
        return; 
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);

    updateTotalPrice;

    window.location.href = "completepurchase.html";
})