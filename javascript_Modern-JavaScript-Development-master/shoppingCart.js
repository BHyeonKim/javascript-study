// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantitiy) {
  cart.push({ product, quantitiy });
  console.log(`${quantitiy} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantitiy) {
  cart.push({ product, quantitiy });
  console.log(`${quantitiy} ${product} added to cart`);
}
