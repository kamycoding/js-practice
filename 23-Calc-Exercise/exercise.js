let firstNumber = prompt("Bitte geben Sie die erste Zahl ein:");
let secondNumber = prompt("bitte geben Sie die zweite Zahl ein:");

if (firstNumber.trim() === "" || secondNumber.trim() === "") {
  alert("Bitte geben Sie ein Zahl ein!");
}

firstNumber = +firstNumber;
secondNumber = +secondNumber;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Nur Zahlen bitte!");
}
