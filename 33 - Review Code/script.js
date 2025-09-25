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
