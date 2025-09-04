//* splice

const students = [
  {
    id: 1,
    name: "kamy",
    age: 27,
    score: 13,
  },
  {
    id: 2,
    name: "shadi",
    age: 5,
    score: 52,
  },
  {
    id: 3,
    name: "sog",
    age: 26,
    score: 99,
  },
  {
    id: 4,
    name: "tania",
    age: 6,
    score: 34,
  },
  {
    id: 5,
    name: "gholam",
    age: 45,
    score: 65,
  },
];

const users = ["kamy", "sog", " shadi", "tania"];

//*2 Param ==> Remove ITEM +3 Param ==> add ITEM
users.splice(1, 2);
console.log(users);

//* important EX ->

const products = [
  { id: 1, title: "pen", price: 12 },
  { id: 2, title: "pencile", price: 4 },
  { id: 3, title: "milk", price: 22 },
  { id: 4, title: "headphone", price: 200 },
  { id: 5, title: "water", price: 8 },
  { id: 6, title: "soft drink", price: 42 },
];

const basket = [
  { id: 1, title: "milk", price: 22 },
  { id: 2, title: "headphone", price: 200 },
  { id: 3, title: "water", price: 8 },
];

const userChoice = +prompt(
  "Choose Number :" + "\n1. Delet Item" + "\n2. Add Item"
);
if (isNaN(userChoice) || userChoice !== 1 || userChoice !== 2) {
  alert("Please Type Just 1 Or 2");
} else {
  //codes
}
