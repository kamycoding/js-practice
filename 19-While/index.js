// i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

let userNumber = prompt("Enter your Number : ");
let count = 0;
let sum = 0;

if (isNaN(userNumber) || userNumber === "") {
  alert("Just Number please!!");
} else {
  userNumber = parseInt(userNumber);

  if (userNumber === 0) {
    count = 1;
    sum = 0;
  } else {
    let temp = Math.abs(userNumber);

    while (temp !== 0) {
      let digit = temp % 10;
      sum += digit;
      count++;
      temp = Math.floor(temp / 10);
    }
  }
  alert(` count: ${count} -  sum: ${sum}`);
}
