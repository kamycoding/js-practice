//* Local storage example

// local storage ==> persistent - 5mg - origin
const data = { name: "kamycoding", age: 22 };
const stringData = JSON.stringify(data);
localStorage.setItem("name", "kamycoding");
const dataGet = localStorage.getItem("data");
const parseData = JSON.parse(dataGet);
console.log(parseData);

// cookies
document.cookie = "name=kamycoding";
document.cookie = "age=28";
