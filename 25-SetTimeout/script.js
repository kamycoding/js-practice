//* SetTimeout

// setTimeout(
//   function (num1, num2) {
//     console.log(`Timeout Function --> ${num1} and ${num2} `);
//   },
//   3000,
//   12,
//   9
// );

//! EX

// let hasProfile = false;
// setTimeout(function () {
//   if (!hasProfile) {
//     alert("Complete your Profile please 😒");
//   }
// }, 5000);

//* Flag

const username = prompt("Please Enter your username : ");
const users = ["kamy", "shadi", "sog", "tania"];

let isLogin = false;

users.forEach(function (user) {
  if (user === username) {
    isLogin = true;
  }
});

if (isLogin) {
  alert("Done 😊");
} else {
  alert("No 😒");
}
