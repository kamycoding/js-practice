//* Way 1 (filter method)

// let filteredProduct = basket.filter(function (product) {
//   return product.price < 100;
// });
// let postCost = filteredProduct.length * 10;

// let sum = 0;
// basket.forEach(function (product) {
//   sum += product.price;
// });

// const totalPrice = sum + postCost;
// console.log("Total Price --> ", totalPrice);

//* Way 2 (Map Method)
// let postCost = 0;
// let sum = 0;
// basket.map(function (product) {
//   if (product.price < 100) {
//     postCost += 10;
//   }
//   sum += product.price;
// });

// const totalPrice = sum + postCost;
// console.log("Total Price --> ", totalPrice);

// const userInput = prompt("Type a Word");

// const wordSplit = userInput.split("");
// const wordRevers = wordSplit.reverse();
// const wordJoin = wordRevers.join("");

// if (userInput === wordJoin) {
//   alert("yes");
// } else {
//   alert("no");
// }

const basket = [
  { id: 1, name: "laptop", price: 450 },
  { id: 2, name: "phone", price: 200 },
  { id: 3, name: "milk", price: 13 },
  { id: 4, name: "water", price: 9 },
  { id: 5, name: "coolpad", price: 90 },
  { id: 6, name: "hard", price: 60 },
];

//! Maps
const myMaps = new Map();

myMaps.set("name", "kamycoding");
myMaps.set("age", "27");
myMaps.set(3, 13);

const result = myMaps.get("name");
const size = myMaps.size;
const removeItem = myMaps.delete("age");
// const clearItem = myMaps.clear();
const hasItem = myMaps.has("name");
console.log(myMaps);
console.log(size);
console.log(removeItem);
// console.log(clearItem);
console.log(result);
console.log(hasItem);
console.log(typeof myMaps);
