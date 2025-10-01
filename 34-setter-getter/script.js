//* Setter and Getter

// const data = {
//   firstName: "sog",
//   lastName: "design",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(string) {
//     [this.firstName, this.lastName] = string.split(" ");
//   },
// };
// data.firstName = "kamy";
// data.lastName = "coding";

// data.fullName = "kamy coding";
// console.log(data);

//* Closure - Factory Function

//* State Retention
//* Encapsulation
// const like = () => {
//   let likesCounter = 0;
//   likesCounter++;
//   return likesCounter;
// };
// console.log(like());
// console.log(like());
// console.log(like());

// let likesCounter = 0;
// const like = () => {
//   likesCounter++;
//   return likesCounter;
// };

// console.log(like());
// console.log(like());
// console.log(like());

// Lexical Scope
// const like = like();
// console.log(like());
// console.log(like());
// console.log(like());

function like() {
  let likesCounter = 0;
  return function () {
    likesCounter++;
    return likesCounter;
  }; //! Closure
}

//! Pure - Impure Function
const dublicate = (number) => number * 2;
console.log(dublicate(5));
