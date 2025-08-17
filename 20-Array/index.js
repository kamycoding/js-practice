let user = ["kamy", "sog", "frank", "leo", "shadi", "tania"];

user[0] = "kamycoding";
user.push(13);
console.log(user);
user.pop();
console.log(user);
user.shift();
console.log(user);
user.unshift(13);
console.log(user);

let userNumber = 0;
let userNumbers = [];
let sum = 0;
while (userNumber !== -1) {
  userNumber = +prompt(
    "Enter your number: \nEnter the -1 if you dont have number"
  );

  if (userNumber !== -1) {
    userNumbers.push(userNumber);
  }
}

for (let i = 0; i < userNumbers.length; i++) {
  sum += userNumbers[i];
}
const average = sum / userNumbers.length;
console.log(userNumbers);
alert("Average : " + Math.round(average));
