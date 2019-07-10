var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { 
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`


} 



function viewCart() {
  
}
  


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



function generateCartItem(itemName) {
  return {
   itemName:itemName,
    itemPrice:Math.floor(Math.random() *101)
  }
}

function showItems(itemName) {
  if(cart.length === 1) {
    return `${item.itemName[1]} at ${item.itemPrice}.` 
  } else if(cart.length === 2) {
    for(let i = 1, l = cart.length; i < l; i++)
    return 
  }
}