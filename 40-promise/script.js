//* Promises in JavaScript
// setTimeout(() => {
//   console.log("!");
// }, 1000);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    resolve();
  }, 1000);
});

promise.then(() => console.log("2"));
