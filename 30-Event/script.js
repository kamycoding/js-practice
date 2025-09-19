const btn = document.querySelector(".click-btn");
btn.onclick = logger;
function logger() {
  console.log("Clicked!");
}
