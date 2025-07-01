////////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)
(mass in kg and height in meter).

1. Store Kamy's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'Philip'sHigherBMI'
   containing information about whether Mark has a higher BMI than Kamy.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
             Kamy weights 92 kg and is 1.95 m tall.

TEST DATA 2: Philip weights 95 kg and is 1.88 m tall.
             Kamy weights 85 kg and is 1.76 m tall.

GOOD LUCK 😄
*/
////////////////////////////////////////////////
// 💪 Coding Challenge #1 – Kamy vs Philip
// 🇬🇧 Compare BMI of Kamy and Philip using given data
// 🇩🇪 BMI von Kamy und Philip mit den gegebenen Daten vergleichen

// Test Data 1
const kamyWeight1 = 92;
const kamyHeight1 = 1.95;
const philipWeight1 = 78;
const philipHeight1 = 1.69;

// Test Data 2
const kamyWeight2 = 85;
const kamyHeight2 = 1.76;
const philipWeight2 = 95;
const philipHeight2 = 1.88;

// 🇬🇧 Calculate BMI = weight / (height ** 2)
// 🇩🇪 BMI berechnen = Gewicht / (Größe ** 2)
const kamyBMI1 = kamyWeight1 / kamyHeight1 ** 2;
const philipBMI1 = philipWeight1 / philipHeight1 ** 2;

const kamyBMI2 = kamyWeight2 / kamyHeight2 ** 2;
const philipBMI2 = philipWeight2 / philipHeight2 ** 2;

// 🇬🇧 Compare
// 🇩🇪 Vergleichen
const philipHigherBMI1 = philipBMI1 > kamyBMI1;
const philipHigherBMI2 = philipBMI2 > kamyBMI2;

// Output results
console.log("Test 1 - Kamy BMI:", kamyBMI1);
console.log("Test 1 - Philip BMI:", philipBMI1);
console.log("Test 1 - Philip has higher BMI:", philipHigherBMI1);

console.log("Test 2 - Kamy BMI:", kamyBMI2);
console.log("Test 2 - Philip BMI:", philipBMI2);
console.log("Test 2 - Philip has higher BMI:", philipHigherBMI2);

// ✅ Finished with bilingual comments 🇬🇧🇩🇪











