//* EX 01
// const characters =
//   "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq1234567890";

// let captcha = "";
// const charactersLength = characters.length;

// for (let i = 0; i < 5; i++) {
//   const randomIndex = Math.floor(Math.random() * charactersLength);
//   captcha += characters[randomIndex];
// }
// alert(`Please Enter the Captcha : ${captcha}`);

//* EX 02

const products = [
  { id: 1, name: "laptop", price: 100, shortLink: "pL3j" },
  { id: 2, name: "mouse", price: 80, shortLink: "ms60" },
  { id: 3, name: "kyboard", price: 60, shortLink: "dFp2" },
  { id: 4, name: "light", price: 15, shortLink: "3Ed6" },
];

const userShortLink = prompt("Enter your short link :");

if (!userShortLink || userShortLink.trim().length === 0) {
  alert("Please Enter Your Short Link !!");
} else {
  const foundProduct = products.find(function (product) {
    return product.shortLink === userShortLink;
  });
  if (foundProduct) {
    alert(
      `Product Found!\n\nName: ${foundProduct.name}\nPrice: ${foundProduct.price}$`
    );
  } else {
    alert("Not found! :( try another shortlink");
  }
}

//* END

const some = "kamy";
