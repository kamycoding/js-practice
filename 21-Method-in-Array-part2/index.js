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
// users.splice(1, 2);
// console.log(users);

//* important EX ->

const products = [
  { id: 1, title: "pen", price: 12 },
  { id: 2, title: "pencil", price: 4 },
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
console.log(userChoice);
if (isNaN(userChoice)) {
  alert("Please enter a number!");
} else if (userChoice !== 1 && userChoice !== 2) {
  alert("Please type just 1 or 2 !");
} else {
  //! Remove From Basket
  if (userChoice === 1) {
    const userProductTitle = prompt(
      "Write the name of the product you want to delete."
    );
    if (userProductTitle.trim().length === 0) {
      alert("Just write the name of the product");
    } else {
      //some --> findIndex --> splice
      //!findIndex --> splice
      const productIndex = basket.findIndex(function (product) {
        return product.title === userProductTitle;
      });
      if (productIndex === -1) {
        alert("No such product was found in the basket.");
      } else {
        basket.splice(productIndex, 1);
        alert("The desired product was successfully deleted.");
        console.log("Basket --> ", basket);
      }
    }
  } else {
    const userProductTitle = prompt(
      "Write the name of the product you want to Add."
    );
    if (userProductTitle.trim().length === 0) {
      alert("Just write the name of the product");
    } else {
      const mainProduct = products.find(function (product) {
        return product.title === userProductTitle;
      });
      if (mainProduct === undefined) {
        alert("No such product was found in the basket.");
      } else {
        let newBasketUser = {
          id: basket.length + 1,
          title: mainProduct.title,
          price: mainProduct.price,
        };
        basket.push(newBasketUser);
        console.log("Final Basket --> ", basket);
      }
    }
  }
}
