//* forEach
//* include
//* some
//* every
//* find
//* findIndex
//* filter
//* map
//* reduce

// const users = ["kamy", "sog", "shadi", "tania"];

// users.forEach(function (user) {
//   console.log("[Users ForEach Function] :", user);
// });

// const scores = [12, 24, 36, 46, 54];

// scores.forEach(function (score) {
//   console.log(score);
// });

//* EX
// const students = [
//   { id: 1, name: "kamy", age: 28, email: "kamy@gmail.com" },
//   { id: 2, name: "sog", age: 27, email: "sog@gmail.com" },
//   { id: 3, name: "shadi", age: 5, email: "shadi@gmail.com" },
// ];

// students.forEach(function (student) {
//   console.log(
//     `Name ==> ${student.name} / age : ${student.age} / email : ${student.email}`
//   );
// });

//* includes
const students = [
  ["kamy", "sog", "tania", "shadi"],
  { id: 1, name: "kamy", age: 28, email: "kamy@gmail.com" },
  { id: 2, name: "sog", age: 27, email: "sog@gmail.com" },
  { id: 3, name: "shadi", age: 5, email: "shadi@gmail.com" },
];

let isInStudents = students[2].includes("sog");
console.log(isInStudents);
