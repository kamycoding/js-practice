let firstNumber = prompt("Bitte geben Sie die erste Zahl ein:");
let secondNumber = prompt("bitte geben Sie die zweite Zahl ein:");

if (firstNumber.trim() === "" || secondNumber.trim() === "") {
  alert("Bitte geben Sie eine Zahl ein!");
} else {
  firstNumber = +firstNumber;
  secondNumber = +secondNumber;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Nur Zahlen bitte!");
  }
}
let userNeed = prompt("was brauchst du ? (+ / - / * / %)");

if (userNeed.trim() === "") {
  alert("...");
} else if (isNaN(userNeed)) {
  alert("...");
} else if (
  userNeed !== "+" &&
  userNeed !== "-" &&
  userNeed !== "*" &&
  userNeed !== "%"
) {
  alert("nur ...");
} else {
  //codes
}
