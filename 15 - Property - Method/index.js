// Property
// Method --> ()

// const text = "kamycoding";
// const userName = "kam";
// const password = "kam 13";

// console.log("text length = " + text.length); // Length = String

// console.log(text[0]); // 0 --> index

// const userName = prompt("Username : ");
// const password = prompt("Enter your pass : ");

// if (userName.length < 3 || password.length < 8) {
//   console.log("Nein!");
// } else {
//   console.log("Hallo !");
// }

const text = "ich MAG javascript und css";
// console.log(text[5]);
// console.log(text.charAt(2)); // low
// console.log(text.charCodeAt()); // low
// console.log(text  + " und React");
const finalText = console.log(text.concat(" und React", " und Next"));
// console.log(text);

// const newText = "               ich mag Js  ";
// console.log(newText);
// console.log(newText.trim());
// console.log(newText.trimStart());
// console.log(newText.trimEnd());
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.includes("css"));
// console.log(text.search("css"));
// console.log(text.indexOf("css"));

// const userName = prompt("Enter your Username : ");

// if (userName.toLowerCase() === "ali") {
//   console.log("Welcome :P");
// } else {
//   console.log("No :)");
// }

// const sentence = prompt("Enter your Sentence: ");
// const word = prompt("Enter your Word: ");

// const wordIndexInSentence = sentence.search(word);

// if (wordIndexInSentence === -1) {
//   console.log("no no");
// } else {
//   console.log("yesyesyes");
// }

// slice - substr - substring
// console.log(text.slice(8,18));

const url = prompt("Enter Your URL : ").trim();
console.log(url);
const checkUrl = url.slice(0, 5);

if (checkUrl.includes("https")) {
  console.log("Done ");
} else {
  console.log("ERORR !!!!!!!");
}
