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

// let userNumber = 0;
// let sum = 0;
// let count = 0;

// while (userNumber !== -1) {
//   sum += userNumber;
//   userNumber = +prompt(
//     "Enter your number:\nIf you dont have a number Enter -1"
//   );

//   if (userNumber !== -1) {
//     count++;
//   }
// }

// const average = Math.floor(sum / count);
// console.log("average : " + average);

// Review

// for (let i = 0; i < 5; i = i + 1) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i < 24; i = i + 1) {
//   sum += i;
// }

// console.log("sum number" + sum);

// با for
let number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}
//با while
let n = 5;
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(`${n}! = ${factorial}`); // 5! = 120

//با do-while

let balance = 1000;
let operation;

do {
  operation = prompt(`
        موجودی فعلی: ${balance} تومان
        1. برداشت
        2. واریز
        3. موجودی
        4. خروج
    `);

  switch (operation) {
    case "1":
      let withdraw = +prompt("مبلغ برداشت:");
      if (withdraw <= balance) {
        balance -= withdraw;
        alert("برداشت موفق!");
      } else {
        alert("موجودی کافی نیست!");
      }
      break;
    case "2":
      let deposit = +prompt("مبلغ واریز:");
      balance += deposit;
      alert("واریز موفق!");
      break;
    case "3":
      alert(`موجودی: ${balance} تومان`);
      break;
  }
} while (operation !== "4");
