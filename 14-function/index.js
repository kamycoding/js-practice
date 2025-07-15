// Function declaration and calling
// Funktionsdeklaration und Aufruf
function logger() {
  console.log("i'm kamycoding"); // Log message to the console / Nachricht in der Konsole anzeigen
}

// Calling the logger function multiple times
// Die logger-Funktion mehrmals aufrufen
logger();
logger();
logger();

// Function with parameters and return value
// Funktion mit Parametern und Rückgabewert
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges); // Log input values / Eingabewerte ausgeben
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // Create juice description / Beschreibung des Safts erstellen
  return juice; // Return the string / Rückgabe des Strings
}

// Call the fruitProcessor function with arguments
// Aufruf der fruitProcessor-Funktion mit Argumenten
fruitProcessor(5, 0);

// Simple function that logs a message
// Einfache Funktion, die eine Nachricht ausgibt
function showMessage() {
  console.log("Hi Kamy");
}

showMessage(); // Function call / Funktionsaufruf

// Check the type of showMessage (will be "function")
// Den Typ von showMessage überprüfen (ergibt "function")
console.log(typeof showMessage);

// Function that doubles a number and logs it
// Funktion, die eine Zahl verdoppelt und ausgibt
function dublicate(number) {
  const resault = number * 2; // Multiply number by 2 / Zahl mit 2 multiplizieren
  console.log(resault); // Log the result / Ergebnis ausgeben
  return;
}

dublicate(3); // Call with 3 / Aufruf mit 3

// Function declaration
function sayMyName(name) {
  console.log(`Your name is ${name} - 1`);
}

// Function Expression
const sayMyName2 = function (name) {
  console.log(`Your name is ${name} - 2`);
};

sayMyName("kamy");
sayMyName2("kamy");

// Anonymous Function
// function () {

// }

(function () {
  console.log("I am IIFE");
})();

(function (name) {
  console.log(`I am ${name}`);
})("IIFE");

// Arrow Function | ES6

// const sum = function (num1, num2) {
//   return num1 + num2;
// };

// const sum = (num1, num2) => {
//   return num1 + num2;
// };
const sum = (num1, num2) => num1 + num2;

const resault = sum(1, 2);
console.log(resault);

// EX 1
// const num1 = +prompt("Number 1 :");
// const num2 = +prompt("Number 2 :");
// function sumTwoNumbers(number1, number2) {
//   const sum = number1 + number2;

//   alert("Number1 + Number2 = " + sum);
// }

// if (isNaN(num1) || isNaN(num2)) {
//   alert("Just Number please :)");
// } else {
//   sumTwoNumbers(num1, num2);
// }

// EX 2
// const userNumber = +prompt("Number : ");

// function isEverOrOdd(number) {
//   if (userNumber % 2 === 0) {
//     alert("Your number is Even !");
//   } else {
//     alert("Your number is Odd");
//   }
// }

// if (isNaN(userNumber)) {
//   alert("Just Number :)");
// } else {
//   isEverOrOdd(userNumber);
// }

// const num1 = +prompt("Number1 :");
// const num2 = +prompt("Number2 :");
// const num3 = +prompt("Number3 :");

// function calculateAverage(number1, number2, number3) {
//   let sum = num1 + num2 + num3;
//   let average = sum / 3;

//   alert("Average :" + average);
// }
// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//   alert("Just Number :)");
// } else {
//   calculateAverage(num1, num2, num3);
// }

function sum(num1, num2) {
  const resault = num1 + num2;
  console.log("num1 + num2 = " + resault);
}

sum(13);
