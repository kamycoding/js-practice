//* map

const students = [
  {
    id: 1,
    name: "kamy",
    age: 27,
    score: 13,
  },
  {
    id: 2,
    name: "shadi",
    age: 5,
    score: 52,
  },
  {
    id: 3,
    name: "sog",
    age: 26,
    score: 99,
  },
  {
    id: 4,
    name: "tania",
    age: 6,
    score: 34,
  },
  {
    id: 5,
    name: "gholam",
    age: 45,
    score: 65,
  },
];

const users = ["kamy", "sog", "shadi", "tania"];
const products = [
  { id: 1, title: "pen", price: 12 },
  { id: 2, title: "pencil", price: 4 },
  { id: 3, title: "milk", price: 22 },
  { id: 4, title: "headphone", price: 200 },
  { id: 5, title: "water", price: 8 },
  { id: 6, title: "soft drink", price: 42 },
];

const scores = [12, 16, 22, 32, 33, 54, 199, 215, 1254];

// const mappedScores = scores.map(function (score) {
//   console.log(score);
//   if (score < 30) {
//     return score + 10;
//   }

//   return score;
// });
// console.log(mappedScores);

const newStudents = students.map(function (student) {
  student.age = student.age + 2;
  return student;
});
console.log(newStudents);
