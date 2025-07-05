////////////////////////////////////////////////
// ✅ Truthy & Falsy Values in JavaScript

// 🇬🇧 These values are falsy in JS: 0, '', undefined, null, NaN
// 🇩🇪 Diese Werte sind in JS "falsy": 0, '', undefined, null, NaN
console.log(Boolean(0));            // false
console.log(Boolean(undefined));    // false
console.log(Boolean("kamycoding")); // true
console.log(Boolean({}));           // true
console.log(Boolean(""));           // false

// 🇬🇧 Conditional check with falsy value (money = 0)
// 🇩🇪 Bedingte Überprüfung mit falsy Wert (money = 0)
const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// 🇬🇧 Check for undefined variable (height)
// 🇩🇪 Überprüfung einer undefinierten Variablen (height)
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// 🇬🇧 Strict equality (===) check
// 🇩🇪 Strikter Gleichheitsvergleich (===)
const age2 = 18;
if (age2 === 18) console.log("Good");

// 🇬🇧 Prompt and type conversion with favourite number
// 🇩🇪 Eingabeaufforderung und Typumwandlung mit Lieblingszahl
const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 13) {
  console.log("Super!");
}
