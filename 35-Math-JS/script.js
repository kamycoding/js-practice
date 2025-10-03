// Date Object
const date = new Date("1998-04-05");
console.log(date);
console.log(date.getTime());

const date2 = new Date("1998-08-17");
console.log(date2);
console.log(date2.getTime());

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

const number = 2.63;

console.log(Math.round(number)); // 3
console.log(Math.trunc(number)); // 2
console.log(Math.ceil(number)); // 3
console.log(Math.floor(number)); // 2

console.log(Math.pow(2, 3)); // 2 ** 3
console.log(Math.sqrt(4)); // 2
console.log(Math.abs(number)); // 2.63

console.log(Math.min(1, 2, 3, -4, -5)); // -5
console.log(Math.max(1, 2, 3, -4, -5)); // 3

//* EX RANDOM NUMBERS
// Generate a random integer
const generateRandomInteger = (min, max) => {
  const result = min + Math.floor(Math.random() * (max + 1));
  return result;
};

console.log(generateRandomInteger(3, 13));

const determineAge = (birthDate) => {
  const birthDateMS = new Date(birthDate).getTime();
  console.log(birthDateMS);
};
determineAge("1998-04-05");
