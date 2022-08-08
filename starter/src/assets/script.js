
let products = []; //array to hold all products
let totalPaid = 0; // used for paying at checkout
let trackAmount = 0; // used to store amount left to pay (see PAY function)


//products selled at store
const cherry = {   
  name: "cherry",
  price: 30,
  quantity: 0,
  productId: 1001,
  image: "images/cherry.jpg"
};
const orange = {
  name: "orange",
  price: 5,
  quantity: 0,
  productId: 1002,
  image: "images/orange.jpg"
};
const strawberry = {
  name: "strawberry",
  price: 10,
  quantity: 0,
  productId: 1003,
  image: "images/strawberry.jpg"
};

products.push(cherry, orange, strawberry);

let cart = []; //array to hold products once been selected

// function used to add products to cart
function addProductToCart(productId) {
  products.forEach(productElement => {
    if (productElement.productId === productId) { //if statement for matching product by productId and incresing quantity
      productElement.quantity ++;
      if (!cart.includes(productElement)){ //is statement for adding product to cart if wasnt added yet
        cart.push(productElement);
      }
    } 
  }) 
}

// function used to increase quantity of products in cart
function increaseQuantity(productId) {
  products.forEach(productElement => {
    if (productElement.productId === productId) { //if statement for matching product by productId and incresing quantity
      productElement.quantity++;
    }
  })
};

// function used to dencrease quantity of products in cart
function decreaseQuantity(productId) {
  products.forEach(productElement => {
    if (productElement.productId === productId) { //if statement for matching product by productId and decresing quantity
      productElement.quantity--;
      if (productElement.quantity === 0) { //if statement for removing product from cart if quantity = 0
        cart = cart.filter(element => element.productId != productId);
      }
    }
  })
};

// function used to remove products from cart
function removeProductFromCart(productId) {
  products.forEach(productElement => {
    if (productElement.productId === productId) { //if statement for matching product by productId and changing quantity to 0
      productElement.quantity = 0;
      cart = cart.filter(element => element.productId != productId); //if statement for removing product from cart if quantity = 0
    }
  })
}

// function used to calcuate the cart total cost
function cartTotal() {
  let cartSum = 0;
  cart.forEach(productElement => {
    cartSum += productElement.quantity*productElement.price; //calculation of total price
  })
  return cartSum;
};

// function used to empty cart
function emptyCart() {
  cart = [];
};

function pay(amount) {
  let total = amount - cartTotal(); //calculation of remaining payment
  if (trackAmount < 0) {
    return (trackAmount += amount);
  }
  trackAmount = total; //store amount left to pay
  return total;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
