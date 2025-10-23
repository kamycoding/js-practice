const choices = ["rock", "paper", "scissors"];

const playerChoice = prompt("Choose Rock, Paper, Scissors:").toLowerCase();
if (playerChoice) {
  console.log(`you choose ${playerChoice}`);
} else {
  console.log("you cheated!");
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses ${computerChoice}`);

if (playerChoice === computerChoice) {
  console.log("It's a tie!");
} else if (playerChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("You win! Rock crushes Scissors.");
  } else {
    console.log("Computer wins! Paper covers Rock.");
  }
} else if (playerChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("You win! Paper covers Rock.");
  } else {
    console.log("Computer wins! Scissors cuts Paper.");
  }
} else {
  if (computerChoice === "paper") {
    console.log("You win! Scissors cuts Paper.");
  } else {
    console.log("Computer wins! Rock crushes Scissors.");
  }
}
