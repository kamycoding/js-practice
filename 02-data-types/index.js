// 🌟 Working with Data Types in JavaScript
// 🌟 Arbeiten mit Datentypen in JavaScript

// Declare a boolean variable
// Deklariere eine boolesche Variable
let javascriptIsBest = true;

// Print the value of the variable
// Gib den Wert der Variable aus
console.log(javascriptIsBest); // true

// Check the type of a boolean literal
// Überprüfe den Typ eines booleschen Wertes
console.log(typeof true); // "boolean"

// Check the type of the variable
// Überprüfe den Typ der Variable
console.log(typeof javascriptIsBest); // "boolean"

// Check the type of a number
// Überprüfe den Typ einer Zahl
console.log(typeof 13); // "number"

// Check the type of a string
// Überprüfe den Typ eines Strings
console.log(typeof "kamycoding"); // "string"

// Reassign the variable with a different type (string)
// Weise der Variable einen anderen Typ zu (String)
javascriptIsBest = "YES";

// Check the new type of the variable
// Überprüfe den neuen Typ der Variable
console.log(typeof javascriptIsBest); // "string"

// Declare a variable without assigning a value (undefined)
// Deklariere eine Variable ohne Wertzuweisung (undefined)
let year;

// Print the value of the uninitialized variable
// Gib den Wert der nicht initialisierten Variable aus
console.log(year); // undefined

// Check the type of the uninitialized variable
// Überprüfe den Typ der nicht initialisierten Variable
console.log(typeof year); // "undefined"

// Assign a number to the variable
// Weise der Variable eine Zahl zu
year = 1313;

// Print the type and value of the variable
// Gib Typ und Wert der Variable aus
console.log(typeof year, year); // "number", 1313

// Check the type of null
// Überprüfe den Typ von null
console.log(typeof null); // "object" 🤔 This is a bug in JavaScript!
// "object" 🤔 Das ist ein Bug in JavaScript!
