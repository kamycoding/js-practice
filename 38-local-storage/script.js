//* Local storage example

// local storage ==> persistent - 5mg - origin
const data = { name: "kamycoding", age: 22 };
const stringData = JSON.stringify(data);
localStorage.setItem("name", "kamycoding");
