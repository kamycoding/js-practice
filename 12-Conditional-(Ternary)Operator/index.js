// ✅ Ternary Operator & Tip Calculator Examples

// 🔹 Ternary Operator – Conditional Driving Check
const age = 27;

// 🇬🇧 Ternary operator to decide based on age
// 🇩🇪 Ternärer Operator zur Entscheidung basierend auf dem Alter
age >= 18 ? console.log("I can drive") : console.log("I don't like driving");

// 🇬🇧 Store result of ternary operator in a variable
// 🇩🇪 Ergebnis des ternären Operators in einer Variable speichern
const auto = age >= 18 ? "driving" : "not today";
console.log(auto);


// 🔹 Tip Calculator Example
const bill = 275;

// 🇬🇧 Use ternary to determine tip percentage based on bill
// 🇩🇪 Ternärer Operator zur Berechnung des Trinkgeldes basierend auf der Rechnung
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// 🇬🇧 Print detailed message using template literal
// 🇩🇪 Detaillierte Nachricht mit Template Literal ausgeben
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
