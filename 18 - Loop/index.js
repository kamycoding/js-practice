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
    console.log("Zoj : " + i);
  }
}
