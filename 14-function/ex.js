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
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const age = calcAge(1998);

// Function expression
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1900);

// Arrow Function
const yearsUntilRetriment = (birthYear, firstName) => {
  const ageUser = 2025 - birthYear;
  const retriment = 65 - ageUser;
  // return retriment
  return `${firstName} retries in ${retriment} years`;
};

console.log(yearsUntilRetriment(1998, "kamycoding"));
