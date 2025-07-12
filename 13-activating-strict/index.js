// ✅ Strict Mode & Logic Gate Example

"use strict"; // 🇬🇧 Enforce stricter parsing and error handling
                // 🇩🇪 Aktiviert den strikten Modus für genauere Fehlermeldungen und sauberen Code

// 🔹 Variable to store driver's license status
// 🇬🇧 Initially set to false
// 🇩🇪 Anfangs auf false gesetzt
let hasDriversLicense = false;

// 🔹 Test result (simulation)
// 🇬🇧 If passed, allow updating driver's license
// 🇩🇪 Wenn Test bestanden ist, kann der Status aktualisiert werden
const passTest = true;

if (passTest) hasDriversLicense = true;

// 🔹 Final check
// 🇬🇧 If person has a driver's license, print confirmation
// 🇩🇪 Wenn der Benutzer einen Führerschein hat, Ausgabe im Terminal
if (hasDriversLicense) console.log("I can drive 🚗");
