const data = {
  name: "kamycoding",
  age: 27,
  skills: ["JS", "React", "Node.js"],
};

const jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(JSON.parse(jsonData));
