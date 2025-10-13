document.getElementById("myH1").textContent = "Hello from JavaScript!";
document.getElementById("myP").textContent =
  "This paragraph is also changed by JavaScript.";

// variable = a container that stores a value. Behaves as if it were the value it contains.
// 1. declaration
// 2. assignment

let x;
x = 100; // assignment

let age = 27;
let price = 99.99;
let gpa = 3.7;

let firstName = "kamycoding";
let faveFood = "pizza";
let email = "kamycoding@example.com";
// let is a modern way to declare a variable
// var is the old way to declare a variable (don't use it)
var lastName = "Smith";

let online = true; // boolean
let offline = false; // boolean

console.log(typeof firstName, firstName);
console.log(`your name is ${firstName}`);
console.log(typeof age);
console.log(`You are ${age} years old.`);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`);
