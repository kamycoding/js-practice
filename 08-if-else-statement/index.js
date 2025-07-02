////////////////////////////////////////////////
// ✅ Conditional Statements – if / else

// 🇬🇧 Check if person is old enough to do something
// 🇩🇪 Prüfen, ob jemand alt genug ist
const age = 27;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Is Ok Mate !"); // 🇬🇧 Person is allowed / 🇩🇪 Person ist erlaubt
} else {
  const yearsLeft = 18 - age;
  console.log("Age not enough"); // 🇬🇧 Not old enough / 🇩🇪 Nicht alt genug
}

// 🇬🇧 Determine century based on birth year
// 🇩🇪 Jahrhundert basierend auf dem Geburtsjahr bestimmen
const birthYear2 = 1998;
let century;

if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); // 20
