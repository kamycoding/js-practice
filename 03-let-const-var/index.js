// In this file, we learn about conditional statements (if, else if, else) in JavaScript.
// These statements allow us to control the flow of our program based on certain conditions.
// By using if/else, we can decide which code should run depending on whether a condition is true or false.
// We will also practice using comparison operators to evaluate conditions.

// In this code, we check if the variable 'number' is greater than 0, equal to 0, or less than 0.
let number = 13;

if (number > 0) {
  console.log("number is positive");
} else if (number === 0) {
  console.log("number is zero");
} else {
  console.log("number is negative");
}

// In this code, we check if the variable 'number2' is even or odd.
let number2 = 16;

if (number2 % 2 === 0) {
  console.log("number2 is Even");
} else {
  console.log("number2 is Odd");
}

// In this code, we check the age of a user and determine access based on age groups.
let userAge = 27;

if (userAge < 13) {
  console.log("Access denied: You are too young.");
} else if (userAge >= 13 && userAge <= 18) {
  console.log("Access granted with parental guidance.");
} else {
  console.log("Access granted: You are an adult.");
}

// In this code, we find the largest number among three variables a, b, and c.

let a = 10;
let b = 5;
let c = 15;

if (a > b && a > c) {
  console.log("a is the largest number");
} else if (b > a && b > c) {
  console.log("b is the largest number");
} else {
  console.log("c is the largest number");
}

let ageNumber = 18;
let average = 15;

if (ageNumber >= 18 && average > 17) {
  console.log("sehr gut student");
} else if (ageNumber > 13 && ageNumber < 18 && average > 15 && average < 17) {
  console.log("gut student");
} else if (average > 10) {
  console.log("du muss mehr lernen");
} else {
  console.log("normal student");
}
// bis bald
// ich bin