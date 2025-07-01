// ✨ 07 - String & Template Literals

// 🧠 Basic String Concatenation
// 🇬🇧 Traditional way using + operator
// 🇩🇪 Traditioneller Weg mit dem + Operator
const firstName = "kamycoding";
const job = "web-developer";
const birthYear = 1998;
const now = 2033;

const kamy =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + " !";
console.log(kamy); // I'm kamycoding, a 35 years old web-developer !

// 🧵 Template Literals with backticks (``)
// 🇬🇧 Modern and readable syntax
// 🇩🇪 Moderne und lesbare Syntax
const newKamy = `I'm ${firstName}, a ${now - birthYear} year old ${job} !`;
console.log(newKamy); // I'm kamycoding, a 35 year old web-developer !

// 💡 You can write normal strings using backticks too
// 🇩🇪 Auch normale Strings können mit Backticks geschrieben werden
console.log(`just test ! :)`);
