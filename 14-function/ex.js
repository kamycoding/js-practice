// function sayMyName(name) {
//   return `hi ${name} welcome!`;
// }

// let resault = sayMyName("kamy");
// console.log(resault);

// function sayMyName(name = "Guest") {
//   return `Hi ${name} welcome!`;
// }

// let resault = sayMyName("kamy");
// console.log(resault);
// resault = sayMyName();
// console.log(resault);

// const add = (a,b) => a + b;
// const double = number =>number * 2;

// const showMessage = (text) => console.log(`The resault is ${text}`);

// function sum(num1, num2, callback) {
//   const summNumber = num1 + num2;
//   const resault = summNumber ** 2;
//   callback(resault);
// }

// sum(2, 3, showMessage);

// Function Declaration
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// const age = calcAge(1998);

// Function expression
// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };
// const age2 = calcAge2(1900);

// Arrow Function
// const yearsUntilRetriment = (birthYear, firstName) => {
//   const ageUser = 2025 - birthYear;
//   const retriment = 65 - ageUser;
// return retriment
// return `${firstName} retries in ${retriment} years`;
// };

// console.log(yearsUntilRetriment(1998, "kamycoding"));
// console.log(yearsUntilRetriment(1999, "sog"));

// const countLetter = (str, letter) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const resault = countLetter("doosetet daram", "t");
// console.log(resault);

// forEach

// const numbers = [2, 4, 5, 65, 6, 7, 8, 56];
// const newNumber = [];

// numbers.forEach((number) => {
//   newNumber.push(number * 2);
// });
// console.log(newNumber);

// map

// const numbers = [21, 4, 6, 8, 10];

// const newNumber = numbers.map((number) => number * 3);

// console.log(newNumber);
// console.log(numbers);

// let sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log("sum : ", sum(8, 2));

// let doubleNumber = (num) => num * 2;

// console.log(doubleNumber(3));

// let makeUser = (id, name) => ({ id: id, name: name });
// console.log("user", makeUser(12, "kamy"));

// find
// const number = [2, 4, 5, 6, 8, 9];

// const resault = number.find((number) => {
//   console.log(number);
//   const isEqual = number === 5;
//   console.log(isEqual);
// });

// filter
// const number = [2, 4, 6, 8, 5, 3, 5];

// const resault = number.filter((number) => number === 5);
// console.log(resault);

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// let sum2 = 0;
// const sum = numbers.forEach((number) => (sum2 += number));

// console.log(sum2);

// reduce

// const numbers = [2, 4, 6, 8, 10];

// const resault = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(resault);

// every - some ===> true or false

const data = [2, 4, 6, 8];

// const resault = data.every((item) => {
//   const isTrue = typeof item === "number";
//   return isTrue;
// });
// console.log(resault);

const resault = data.every((item) => typeof item === "number");
console.log(resault);
