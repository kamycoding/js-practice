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

// const data = [2, "4", 6, 8];

// const resault = data.every((item) => {
//   const isTrue = typeof item === "number";
//   return isTrue;
// });
// console.log(resault);

// const resault = data.every((item) => typeof item === "number");
// console.log(resault); ===> false

// const resault = data.some((item) => typeof item === "number");
// console.log(resault);  ===> true

// Challenge 1. Find customers with age>60 and age<10
// Challenge 2. Build customer data with title and full name

// let customers = [
//   {
//     id: 1,
//     f_name: "Abby",
//     l_name: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     f_name: "Jerry",
//     l_name: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     f_name: "Dianna",
//     l_name: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     f_name: "Dev",
//     l_name: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     f_name: "Maria",
//     l_name: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];
// console.log("ok");

// const result = customers.filter(
//   (customer) => customer.age > 60 || customer.age < 10
// );

// console.log(result);

// const customerWithTitle = customers.map((customer) => {
//   let title = "";
//   if (customer.gender === "M") {
//     title = "Mr.";
//   } else if (customer.gender === "F" && customer.married) {
//     title = "Mrs.";
//   } else {
//     title = "Miss.";
//   }
//   customer.fullName = `${title} ${customer.f_name} ${customer.l_name}`;
//   return customer;
// });

// console.log(customerWithTitle);

// let users = [
//   { id: 1, name: "kamy" },
//   { id: 2, name: "sog" },
//   { id: 3, name: "shadi" },
// ];

// console.log(users[1]);
// console.log(users[1].name);
// console.log(users[1]["name"]);
// console.log(users.length);

// let newUser = {
//   id: users.length + 1,
//   name: "tania",
// };

// users.push(newUser);
// console.log(users);

// EX Reg

let users = [
  { id: 1, name: "kamy", age: 27 },
  { id: 2, name: "sog", age: 25 },
  { id: 3, name: "shadi", age: 5 },
];

function validateEmail(email) {
  if (email.length < 5) return false;
  if (!email.includes("@") || !email.includes(".")) return false;
  if (email.indexOf("@") >= email.indexOf(".")) return false;
  return true;
}

function validateName(name) {
  if (name.length < 3 || name.length > 10) {
    return false;
  }
  return true;
}

function validateAge(age) {
  if (age < 18) {
    return false;
  }
  return true;
}
function signUp() {
  let newName = prompt("Enter Your Name :");
  if (!validateName(newName)) {
    alert("name is between 3 and 10");
    return;
  }

  let newFamily = prompt("Enter your Family :");
  if (!validateName(newFamily)) {
    alert("family is between 3 and 10");
    return;
  }

  let newAge = Number(prompt("Enter your Age :"));
  if (!validateAge(newAge)) {
    alert("Age must be over 18.");
    return;
  }

  let newEmail = prompt("Enter your Email :");
  if (!validateEmail(newEmail)) {
    alert("Format Email is not correct");
    return;
  }

  let newUser = {
    id: users.length + 1,
    name: newName,
    family: newFamily,
    age: newAge,
    email: newEmail,
  };
  users.push(newUser);
}
signUp();
console.log(users);
