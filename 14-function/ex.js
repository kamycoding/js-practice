// function sayMyName(name) {
//   return `hi ${name} welcome!`;
// }

// let resault = sayMyName("kamy");
// console.log(resault);

function sayMyName(name = "Guest") {
  return `Hi ${name} welcome!`;
}

let resault = sayMyName("kamy");
console.log(resault);
resault = sayMyName();
console.log(resault);
