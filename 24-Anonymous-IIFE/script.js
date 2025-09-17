//* Anonymous & IIFE Function

// [1, 2, 3, 4, 5, 6].forEach(function (number) {
//   console.log(number);
// });

// (function sum(num1, num2) {
//   console.log(num1 + num2);
// })(1, 12);

//* Method setInterval

// setInterval(function () {
//   console.log("test log");
// });

let minutes = +prompt("Enter your Minutes :");
let second = +prompt("Enter your Second");

let timer = setInterval(function () {
  if (second === -1) {
    minutes--;
    second = 59;
  }
  if (minutes === 0 && second === 0) {
    clearInterval(timer);
    alert("Game Over ! 😒 ");
  }
  console.log(`Timer : ${minutes}:${second}`);
  second--;
}, 1000);

// let minutes = +prompt("Enter your Minutes:", 1);
// let seconds = +prompt("Enter your Seconds:", 5);

// let timer = setInterval(function () {
//   if (minutes === 0 && seconds === 0) {
//     clearInterval(timer);
//     console.log("✅ Timer Finished!");
//   }

//   let formattedMinutes = minutes.toString().padStart(2, '0');
//   let formattedSeconds = seconds.toString().padStart(2, '0');

//   console.log(`Timer: ${formattedMinutes}:${formattedSeconds}`);

//   if (seconds === 0) {
//     minutes--;
//     seconds = 59;
//   } else {
//     seconds--;
//   }
// }, 1000);
