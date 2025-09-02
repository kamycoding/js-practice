//* forEach
//* include
//* some
//* every
//* find
//* findIndex
//* filter
//* map
//* reduce

// const users = ["kamy", "sog", "shadi", "tania"];

// users.forEach(function (user) {
//   console.log("[Users ForEach Function] :", user);
// });

// const scores = [12, 24, 36, 46, 54];

// scores.forEach(function (score) {
//   console.log(score);
// });

//* EX
// const students = [
//   { id: 1, name: "kamy", age: 28, email: "kamy@gmail.com" },
//   { id: 2, name: "sog", age: 27, email: "sog@gmail.com" },
//   { id: 3, name: "shadi", age: 5, email: "shadi@gmail.com" },
// ];

// students.forEach(function (student) {
//   console.log(
//     `Name ==> ${student.name} / age : ${student.age} / email : ${student.email}`
//   );
// });

//* includes
// const students = [
//   { id: 1, name: "kamy", age: 28, email: "kamy@gmail.com" },
//   { id: 2, name: "sog", age: 27, email: "sog@gmail.com" },
//   { id: 3, name: "shadi", age: 5, email: "shadi@gmail.com" },
// ];

// let isInStudents = students[2].includes("sog");
// console.log(isInStudents);

//* some
// const isTrue = students.some(function (student) {
//   return student.name === "kamy";
// });
// console.log(isTrue);

//* EX SOME

// const products = [
//   { id: 1, title: "laptop", price: 220, qty: 29 },
//   { id: 2, title: "mouse", price: 34, qty: 29 },
//   { id: 3, title: "hard", price: 56, qty: 0 },
//   { id: 4, title: "handsfree", price: 110, qty: 40 },
//   { id: 5, title: "kyboard", price: 69, qty: 40 },
// ];
// const basket = [
//   { id: 4, title: "handsfree", price: 110, qty: 40 },
//   { id: 5, title: "kyboard", price: 69, qty: 40 },
//   { id: 2, title: "mouse", price: 34, qty: 29 },
// ];
// const userProductTitle = prompt("Enter the product title :");

// if (userProductTitle.length > 0) {
//   const isInShop = products.some(function (product) {
//     return product.title === userProductTitle && product.qty > 0;
//   });
//   if (isInShop === true) {
//     let newBasket = {
//       id: basket.length + 1,
//       title: userProductTitle,
//     };
//     products.forEach(function (product) {
//       if (product.title === userProductTitle) {
//         newBasket.price = product.price;
//       }
//     });
//     basket.push(newBasket);
//     console.log("Basket --> ", basket);

//     let totalPrice = 0;
//     basket.forEach(function (product) {
//       totalPrice += product.price;
//     });
//     alert("Total Price --> " + totalPrice);
//   } else {
//     alert("No QTY :(");
//   }
//   console.log(isInShop);
// } else {
//   alert("please write product title");
// }

//* EX Some

const products2 = [
  { id: 1, title: "laptop", price: 450, qty: 90 },
  { id: 2, title: "handsfree", price: 199, qty: 129 },
  { id: 3, title: "hard", price: 17, qty: 0 },
  { id: 4, title: "kyboard", price: 254, qty: 254 },
  { id: 5, title: "airpod", price: 20, qty: 50 },
  { id: 6, title: "headphone", price: 99, qty: 13 },
];

const basket2 = [
  { id: 4, title: "kyboard", price: 254, qty: 254 },
  { id: 5, title: "airpod", price: 20, qty: 50 },
  { id: 6, title: "headphone", price: 99, qty: 13 },
];

const userProductTitle2 = prompt("Enter Your Product Title :");

if (userProductTitle2.length > 0) {
  const isInShop = products2.some(function (product) {
    return product.title === userProductTitle2 && products.qty > 0;
  });
  if (isInShop === true) {
    let newBasket = {
      id: basket2 + 1,
      title: userProductTitle2,
    };
    products2.forEach(function (product) {
      if (product.title === userProductTitle2) {
        products.price = newBasket.price;
      }
    });
    basket2.push(newBasket);
    console.log(newBasket);
    let totalPrice = 0;
    basket2.forEach(function (product) {
      totalPrice += product.price;
      alert("Total price --> " + totalPrice);
    });
  } else {
    alert("No QTY :(");
  }
} else {
  alert("Write title product!");
}
