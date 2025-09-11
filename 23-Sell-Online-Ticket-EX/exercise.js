// const provincesData = {
//   nordrhein_westfalen: ["Köln", "Düsseldorf", "Dortmund", "Essen"],
//   bayern: ["München", "Nürnberg", "Augsburg", "Würzburg"],
//   hessen: ["Frankfurt am Main", "Wiesbaden", "Darmstadt"],
// };

//* Way 1
// const userProvnice = prompt("Enter Your state :");
// const cleanUserProvince = userProvnice.trim().toLowerCase();
// const foundCities = provincesData[cleanUserProvince];
// console.log(foundCities);
// if (foundCities === undefined) {
//   alert("State not found!");
// } else {
//   alert(`List of Cities : ${foundCities}`);
// }

//* Way 2

// const userProvince = prompt("Enter your state:").trim().toLowerCase();
// if (!userProvince) {
//   alert("Please enter a state name!");
// } else if (!provincesData[userProvince]) {
//   alert("State not found! " + Object.keys(provincesData).join(", "));
// } else {
//   const cities = provincesData[userProvince].join(", ");
//   alert(`List of Cities: ${cities}`);
//   console.log(provincesData[userProvince]);
// }
const questions = [
  {
    question: "Welche Stadt ist Hauptstadt in Deutschland?",
    options: { a: "Hamburg", b: "Berlin", c: "Sankt-Auguston" },
    correctAnswer: "b",
  },
  {
    question: "Welches Bundesland liegt im Süden Deutschlands?",
    options: { a: "Bayern", b: "Hessen", c: "Nordrhein-Westfalen" },
    correctAnswer: "a",
  },
  {
    question: "Welche Stadt liegt am Rhein?",
    options: { a: "Köln", b: "München", c: "Nürnberg" },
    correctAnswer: "a",
  },
];

let score = 0;
for (const question of questions) {
  const fullQuestionText = `${question.question} \na) ${question.options.a} \nb) ${question.options.b} \nc) ${question.options.c} `;
  const userAnswer = prompt(fullQuestionText).trim().toLowerCase();

  if (userAnswer === question.correctAnswer) {
  }
}
