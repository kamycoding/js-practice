// const h1Elems = document.getElementsByTagName("h1");
// const titleElem = document.getElementById("title");
// const listElem = document.getElementById("list");
// const liElems = document.getElementsByClassName("list-item");
// const textElem = document.querySelector(".list-item");
// const textElemnts = document.querySelectorAll(".list-item");

// console.log(h1Elems);
// console.log(titleElem);
// console.log(listElem);
// console.log(liElems);
// console.log(textElem);
// console.log(textElemnts);

const liElem = document.querySelector("li");
const inputElem = document.querySelector("input");
const liElems = document.querySelectorAll("li");

console.log(liElem.className); //* list-item
console.log(liElem.innerHTML); //* about
liElem.innerHTML = "Content";
console.log(liElem.innerHTML); //* Content

console.log(liElem.id); //* li-id
console.log(inputElem);
console.log(inputElem.value); //* kamycoding

liElem.style.color = "blue";
console.log(liElems[0].className);

liElem.setAttribute("id", "test-id");
const getAtt = liElem.getAttribute("id");
console.log(getAtt);
