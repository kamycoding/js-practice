// i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let userNumber = prompt("Enter your Number : ");
// let count = 0;
// let sum = 0;

// if (isNaN(userNumber) || userNumber === "") {
//   alert("Just Number please!!");
// } else {
//   userNumber = parseInt(userNumber);

//   if (userNumber === 0) {
//     count = 1;
//     sum = 0;
//   } else {
//     let temp = Math.abs(userNumber);

//     while (temp !== 0) {
//       let digit = temp % 10;
//       sum += digit;
//       count++;
//       temp = Math.floor(temp / 10);
//     }
//   }
//   alert(` count: ${count} -  sum: ${sum}`);
// }

// let firstNumber = +prompt("Enter your first number :");
// let secondNumber = +prompt("enter your second number :");

// let minNumber = Math.min(firstNumber, secondNumber);
// let maxNumber = Math.max(firstNumber, secondNumber);

// if (minNumber % 2 === 0) {
//   while (minNumber <= maxNumber) {
//     console.log(minNumber);
//     minNumber += 2;
//   }
// } else {
//   minNumber++;
//   while (minNumber <= secondNumber) {
//     console.log(minNumber);
//     minNumber += 2;
//   }
// }

let userNumber = 0;
let sum = 0;
let count = 0;

while (userNumber !== -1) {
  sum += userNumber;
  userNumber = +prompt(
    "Enter your number:\nIf you dont have a number Enter -1"
  );

  if (userNumber !== -1) {
    count++;
  }
}

const average = Math.floor(sum / count);
console.log("average : " + average);
