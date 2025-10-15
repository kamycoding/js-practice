//* checked property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const resultElement = document.getElementById("resultElement");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked === true) {
    subResult.textContent = "You are subscribed";
  } else {
    subResult.textContent = "You are not subscribed";
  }
  if (visaBtn.checked === true) {
    paymentResult.textContent = "You are paying with Visa";
  } else if (masterCardBtn.checked === true) {
    paymentResult.textContent = "You are paying with MasterCard";
  } else if (payPalBtn.checked === true) {
    paymentResult.textContent = "You are paying with PayPal";
  } else {
    paymentResult.textContent = "Please select a payment method";
  }
};
