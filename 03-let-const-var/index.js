// 💡 Variable Declaration: let
// ✅ let allows reassignment
let age = 30;
age = 31; // reassigned (mutable)

// 🔒 Constant Declaration: const
// ❌ Cannot be reassigned!
const birthYear = 1998;
// birthYear = 1990; // ❌ Error: Assignment to constant variable

// ❌ const requires immediate initialization
// const job; // ❌ Error: Missing initializer in const declaration

// ⚠️ var - Old way of declaring variables
// ✅ Can be reassigned but has function scope (not block scope)
var job = "web-developer";
job = "programmer"; // still works, but outdated

// ⚠️ Implicit Global Variable (not recommended!)
lastName = "kamycoding";
console.log(lastName); // ✅ Works but discouraged — no declaration keyword

// 🇬🇧 Summary:
// - Use `let` for variables that will change
// - Use `const` for constants that never change
// - Avoid `var` and undeclared variables

// 🇩🇪 Zusammenfassung:
// - Verwende `let` für veränderbare Werte
// - Verwende `const` für konstante Werte
// - Vermeide `var` und undeklarierte Variablen
