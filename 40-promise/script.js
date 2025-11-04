//* Promises in JavaScript
// setTimeout(() => {
//   console.log("!");
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("1");
//     resolve();
//   }, 1000);
// });

// promise.then(() => console.log("2"));

const random = new Promise((resolve, reject) => {
  console.log("Start");
  setTimeout(() => {
    //* Operation
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject("Error occurred");
    }
  });
}, 2000);

// random.then((result) => result * 10).then((number) => console.log(number));
// random.catch((error) => console.log(error));

random
  .then((result) => {
    return result * 10;
  })
  .then((number) => {
    console.log(number);
  })
  .catch((error) => {
    console.error(error);
  });
