//* Random number generator
// const max = 100;
// const min = 50;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 13;
let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLabel.textContent = randomNum;
};
