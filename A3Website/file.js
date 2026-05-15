const itemNames = ['Adhesive']
const itemPrices = [10]
const itemQuantity = [1]
const itemInStock = [true]


console.log("Working")

var removeCartItem = document.getElementsByClassName('addremove')
console.log(removeCartItem)
for (var i = 0; i < removeCartItem; i++){
    var button = removeCartItem[i]
    button.addEventListener('click', function () {
                console.log("clicked")
    })
}