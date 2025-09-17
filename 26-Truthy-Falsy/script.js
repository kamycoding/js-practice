//* Truthy & Falsey

//! Numbers --> 0 - !0

//! Strings --> "" - !""

//! Object {} --> all object truthy

//! Arrays [] --> all Arrays truthy

const username = prompt("Enter your username : ");
if (!username.trim()) {
  //* "" or "TEXT"
  alert("Enter your username !");
}

const number = +prompt("please enter the age :");

if (!number) {
  alert("Error!");
} else {
  alert("Done!");
}

//! HOISTING

console.log(sum(12, 1));

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(12, 1));
