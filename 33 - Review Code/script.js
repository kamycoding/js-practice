const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];

numbers.forEach((number, index) => {
  console.log(`number: ${number}`);
  console.log(`index: ${index}`);
  console.log("-----------");
});

numbers.forEach((number) => {
  newNumbers.push(number * 2);
});
console.log(newNumbers);

const newNumbers2 = numbers.map((number) => number * 3);

console.log(newNumbers2);

const result = numbers.find((number) => {
  console.log(number);
  const isEqual = number === 3;
  console.log(isEqual);
  return isEqual;
});
console.log("result:", result);
