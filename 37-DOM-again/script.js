//* DOM => Document Object Model
// window
// console.log(document);

//* Single Selector
// const element = document.querySelector("h1")
// const element = document.querySelector(".title");
// const element = document.querySelector("#main-title");
// console.log(element);

//*multiple Selector
// const elements = document.querySelectorAll("p");
// const elements = document.querySelectorAll(".text");
// console.log(elements);

// const spanTag = document.createElement("span");
// spanTag.innerHTML = "add span";
// spanTag.className = "span-class";
// console.log(spanTag);

// delete from DOM
// const element = document.querySelector("div");

// Event Listener
// const btn = document.querySelector("button");
// const showHandler = () => {
//   console.log("Hi kamycoding");
// };
// btn.addEventListener("click", showHandler);

const button = document.querySelector("button");
const div = document.querySelector("div");

const showHandler = (event) => {
  console.log(event.target);
};

button.addEventListener("click", showHandler);
div.addEventListener("click", showHandler);


// dataset

const h1 = document.querySelector("h1");
