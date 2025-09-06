const basket = [
  { id: 1, name: "laptop", price: 450 },
  { id: 2, name: "phone", price: 200 },
  { id: 3, name: "milk", price: 13 },
  { id: 4, name: "water", price: 9 },
  { id: 5, name: "coolpad", price: 90 },
  { id: 6, name: "hard", price: 60 },
];

// Way 1 (filter method)

let filteredProduct = basket.filter(function (product) {
  return product.price < 100;
});
let postCost = filteredProduct.length * 10;

let sum = 0;
basket.forEach(function (product) {
  sum += product.price;
});

const totalPrice = sum + postCost;
console.log("Total Price --> ", totalPrice);
