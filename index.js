var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push ({itemName: item, itemPrice: Math.floor(Math.random()*100)+1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1)
  {
    return 'Your shopping cart is empty.'
  }
  else
  {
    let msg = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        msg += `${getCart()[i].itemName} at $${getCart[i].itemPrice}.`
      }
      else if (i < cart.length-1 && cart.length > 1){
        msg += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
      else {
        msg += `and ${getCart()[i].itemName} at $$(){getCart[i].itemPrice}.`
      }
    }
    return msg
  }
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
