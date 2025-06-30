// 🥮 Basic Math Operations and Operators in JavaScript

// ➕ Subtraction
// 🇬🇧 Subtracting years to calculate age
// 🇩🇪 Subtrahieren von Jahren, um das Alter zu berechnen
const ageKamy = 2033 - 1998;
const ageJavascript = 2099 - 1990;
console.log(ageKamy, ageJavascript); // 35, 109

// ×➗ Exponentiation, Multiplication, Division
// 🇬🇧 Multiply, divide and use power operator
// 🇩🇪 Multiplikation, Division und Potenzoperator verwenden
console.log(ageKamy * 2, ageJavascript / 2, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// ➕ String Concatenation
// 🇬🇧 Combine strings using + operator
// 🇩🇪 Zeichenketten mit dem + Operator kombinieren
const firstName = "kamy";
const lastName = "coding";
console.log(firstName + lastName); // kamycoding
console.log(firstName + " " + lastName); // kamy coding

// 📅 Assignment Operators
// 🇬🇧 Perform arithmetic updates on variables
// 🇩🇪 Mathematische Updates an Variablen durchführen
let x = 13 + 3;
console.log(typeof x, x); // number 16

x += 10; // x = x + 10 → 26
console.log(x);
x *= 4; // x = x * 4 → 104
console.log(x);
x++; // x = x + 1 → 105
console.log(x);
x--; // x = x - 1 → 104
console.log(x);

// ⚖️ Comparison Operators
// 🇬🇧 Compare values and return true/false
// 🇩🇪 Werte vergleichen und true/false zurückgeben
console.log(ageKamy > ageJavascript); // false
console.log(ageJavascript <= ageKamy); // false

// 🧠 Mixing Math and Logic
// 🇬🇧 Combining math operations with logical comparisons
// 🇩🇪 Mathematische Operationen mit logischen Vergleichen kombinieren
const now = 2025;
console.log(now - 1998 > now - 2013); // true

// 🇬🇧 Summary:
// - Use +, -, *, /, ** for math
// - Use +=, *=, ++, -- for assignment
// - Use >, <, >=, <= for comparison

// 🇩🇪 Zusammenfassung:
// - Verwende +, -, *, /, ** für mathematische Operationen
// - Benutze +=, *=, ++, -- für Zuweisungen
// - Nutze >, <, >=, <= für Vergleiche
