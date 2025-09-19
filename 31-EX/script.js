const divImage = document.querySelector("#emoji-display");
const btn = document.querySelector("#toggle-btn");

let isHappy = true;
if (isHappy) {
  divImage.src = "./images/happy.png";
  btn.textContent = "Make Sad";
}
btn.addEventListener("click", function toggleModd() {
  isHappy = !isHappy;
  if (isHappy) {
    divImage.src = "./images/happy.png";
    btn.textContent = "Make Sad";
  } else {
    divImage.src = "./images/sad.png";
    btn.textContent = "Make Happy";
  }
});
