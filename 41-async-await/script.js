//async - await

const duplicate = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    const result = number * 2;
    resolve(result);
  });
  return promise;
}, 2000);

const add = (number) => {
  console.log("start add");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 5;
      resolve(result);
    }, 5000);
  });
  return promise;
};

async function start() {
  const number = duplicate(5);
  console.log(number);
  console.log("end");
}
start();
