// DOM

//! Single Selectors

// const element = document.querySelector("h1");
// console.log(element);
//! multiple Selectors
// const elements = document.querySelectorAll("p");
// console.log(elements);

const element = document.querySelector(".container");
// element.style.color = "lightblue";
// element.style.backgroundColor = "gray";
// element.style.padding = "20px";
// element.style.borderRadius = "8px";
// element.style.textAlign = "center";
// element.className = "container2";
// element.className = "container text"
element.classList.add("text");
element.classList.toggle("text");
setInterval(() => {
  element.classList.toggle("container2");
}, 2000);

//! inserting to DOM
