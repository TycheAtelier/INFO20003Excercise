const itemName = ["Adhesive"];
const itemPrice = ["10"];
const itemQuantity = [1];
const itemInStock = [true];

/* const cart = {};
    function addToCart (productName, productPrice){
            if (cart[productName]) {
                cart[productName].quantity += 1;
                cart[productName].totalPrice += productPrice;
            } else {
                cart[productName] = {
                    quantity: 1,
                    totalPrice: productPrice
                };
            }
            updateCartDisplay();
        }
        function updateCartDisplay() {
            const cartList = document.getElementById('cart');
            cartList.innerHTML = '';
            for (let product in cart) {
                const listItem = document.createElement('li');
                listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: Rs${cart[product].totalPrice.toFixed(2)}`;
                cartList.appendChild(listItem);
            }
        }
*/
        
const ShoppingCart = () => {
    const cart = [];

    const addToCart = (productIndex) => {
        if (itemInStock [itemIndex]) {
            cart.push (itemIndex)
            console.log('${itemName[itemIndex]} added to the cart');
        } else {
            console.log ('$ {itemName[itemIndex]} is out of stock');
        }
        }
    }

    const removeItemFromCart = (itemIndex) => {
        const index = cart.indexOf(itemIndex);
        if (index > -1) {
            cart.splice(index,1);
        }
    };

    const getCartItems = () => {
        return cart.map (itemIndex => itemNames [itemIndex]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, itemIndex) => {
            return total + itemPrices(itemIndex) * itemQuantity[itemIndex];
        }, 0);
    }

    return {
        addItemToCart,
        removeItemFromCart,
        getCartItems,
        calculateTotal
    };
