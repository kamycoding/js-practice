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

const showMessage = (text) => console.log(`The resault is ${text}`);

function sum(num1, num2, callback) {
  const summNumber = num1 + num2;
  const resault = summNumber ** 2;
  callback(resault);
}

sum(2, 3, showMessage);
