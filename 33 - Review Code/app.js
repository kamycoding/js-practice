// const numbers = [1, 2, 3, 4, 5, 6, 7, 5];
// const newNumbers = [];

// numbers.forEach((number, index) => {
//   console.log(`number: ${number}`);
//   console.log(`index: ${index}`);
//   console.log("-----------");
// });

// numbers.forEach((number) => {
//   newNumbers.push(number * 2);
// });
// console.log(newNumbers);

// const newNumbers2 = numbers.map((number) => number * 3);

// console.log(newNumbers2);

// const result = numbers.find((number) => {
//   console.log(number);
//   const isEqual = number === 3;
//   console.log(isEqual);
//   return isEqual;
// });
// console.log("result:", result);

// const resault = numbers.filter((number) => number === 5);

// console.log(resault);

//* reduce

// let accumulator = 0;
// numbers.forEach((number) => {
//   accumulator += number;
// });

// const result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

//* every - some

// const datas = [1, 2, "3", 4, 5, 6];

// const allEven = datas.every((item) => {
//   const isTrue = typeof item === "number";
//   return isTrue;
// });
// const allEven = datas.every((item) => typeof item === "number");
// console.log(allEven);

// const someEven = datas.some((item) => typeof item === "number");
// console.log(someEven);

//* this and bind

globalThis.name = "kamy";
// const data = {
//   name: "sog",
//   show() {
//     console.log(this.name);
//   },
// };

// data.show();
// const func = data.show;

// func();

//* bind

function sayMyName(age, lastName) {
  console.log("Age :", age, "lastName :", lastName);
  console.log(`your name is ${this.name}`);
}
sayMyName(27, "coding");
const data = { name: "sog" };
// sayMyName = sayMyName.bind(data, 33);
// sayMyName();

//* call and apply

sayMyName.call(data, 33, "developer");
