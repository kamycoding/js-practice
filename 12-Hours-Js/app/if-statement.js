//* IF STATEMENT = if a condition is true, execute some code of not, do somethings else

// let age = 12;
// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else {
//   console.log("you must be +18 to enter this site!!");
// }

// let time = 9;

// if (time < 12) {
//   console.log("good morning");
// } else {
//   console.log("good afternoon");
// }
// let isStundet = false;

// if (isStundet) {
//   console.log("you are a student");
// } else {
//   console.log("you are not a student !");
// }

// let someAge = 25;
// let hasLicense = false;

// if (someAge >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log("you must be 18+ to have a License");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age = 0;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age <= 18) {
    resultElement.textContent = `You are too young`;
  } else if (age > 18 && age <= 65) {
    resultElement.textContent = `You are in the working age`;
  } else if (age > 65) {
    resultElement.textContent = `You are too old`;
  } else {
    resultElement.textContent = `Please enter a valid age`;
  }
};
