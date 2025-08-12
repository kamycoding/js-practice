// Loop
// For - While - ForEach - Do While - for in - for of

for (let i = 1; i <= 10; i++) {
  // codes
  console.log("[For Loop log]");
}

let userName = "Kamycoding";

for (let i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

// 0 - 100
// let i = 0 --> i < 100 --> i = i + 1

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// Way 1
for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

// Way 2
let i;
for (i = 100; i >= 0; i = i - 2) {
  console.log(i);
}
// console.log(i); // -2
// update new

// Review
for (let i = 0; i <= 25; i++) {
  console.log("i = " + i);
}

let userName2 = "kamycoding";
console.log(userName2[3]);

for (let i = 0; i < userName2.length; i++) {
  console.log(userName2[i]);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Num : " + i);
  }
}
// let currentPrice;
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   let currentPrice = +prompt("number of " + i + " product.");

//   sum = sum + currentPrice;
// }

// console.log(sum);

// let userNum;
// let sum2 = 0;

// for (let i = 0; i <= 5; i++) {
//   userNum = +prompt("number : " + (i + 1));
//   sum += userNum;
// }
// let average = sum / 5;
// console.log("average = " + average);

// let userNummer = +prompt("enter your Nummber :");
// let count = 0;

// if (isNaN(userNummer)) {
//   alert("just Number!");
// } else {
//   if (userNummer === 0) {
//     count = 1;
//   } else {
//     for (let i = 0; userNummer / 10 !== 0; i++) {
//       count++;

//       userNummer = Math.floor(userNummer / 10);
//     }
//   }
//   alert("count = " + count)
// }

// let userNummer = prompt("Enter your Nummer : ");
// let count = 0;

// if (isNaN(userNummer)) {
//   alert("just nummer");
// } else {
//   if (userNummer === 0) {
//     count = 1;
//   } else {
//     for (let i = 0; userNummer / 10 !== 0; i = i + 1) {
//       count++;

//       userNummer = Math.floor(userNummer / 10);
//     }
//   }
// }

let userNummer2 = prompt("num :");
let count = 0;

if (isNaN(userNummer2)) {
  alert("just num");
} else {
  if (userNummer2 === 0) {
    count = 1;
  } else {
    for (let i = 0; userNummer2 / 10 !== 0; i = 1 + i) {
      count++;

      userNummer2 = Math.floor(userNummer2 / 10);
    }
  }
  alert(count);
}

let enterNummber = prompt("nummer !");
let sum = 0;

if (isNaN(enterNummber)) {
  alert("just nummer");
} else {
  if (enterNummber === 0) {
    sum = 0;
  } else {
    for (let i = 0; enterNummber / 10 !== 0; i = i + 1) {
      sum = sum + (enterNummber % 10);
      enterNummber = Math.floor(enterNummber / 10)
    }
  }
  alert(sum);
}
