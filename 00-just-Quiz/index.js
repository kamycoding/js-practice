//* EX 01
// let result = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i === j) {
//       result += i;
//     }
//   }
// }
// console.log(result);

//* EX 02
let value = "abc";
switch (value.length) {
  case 2:
    console.log("Too short");
    break;
  case 3:
    console.log("Perfect");
  default:
    console.log("Check again");
}
