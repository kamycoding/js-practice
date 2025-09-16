const characters =
  "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq1234567890";

let captcha = "";
const charactersLength = characters.length;

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * charactersLength);
  captcha += characters[randomIndex];
}
console.log(captcha);
