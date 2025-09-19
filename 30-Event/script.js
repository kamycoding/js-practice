//*Way1
// btn.onclick = logger;
// function logger() {
//   console.log("Clicked!");
// }

//* way 2
const itemElems = document.querySelectorAll(".list-item");
const btn = document.querySelector(".click-btn");

btn.addEventListener("click", logger);

function logger() {
  console.log("Clicked!");
  itemElems.forEach(function (li) {
    li.style.color = "red";
    li.style.fontSize = "36px";
  });
}
