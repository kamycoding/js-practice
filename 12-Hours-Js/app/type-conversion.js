//* Type Conversion = change the data type of a value to another data type

let age = window.prompt("How old are you?");
age = Number(age); // convert string to number
age += 1;

console.log(age, typeof age);

let x = "pizza!";
let y = "pizza!";
let z = "pizza!";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
