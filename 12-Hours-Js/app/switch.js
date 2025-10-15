//* switch statement

let day = +prompt("Enter a number (0-6):");

switch (day) {
  case 0:
    alert("monday");
    break;
  case 1:
    alert("tuesday");
    break;
  case 2:
    alert("wednesday");
    break;
  case 3:
    alert("thursday");
    break;
  case 4:
    alert("friday");
    break;
  case 5:
    alert("saturday");
    break;
  case 6:
    alert("sunday");
    break;
  default:
    alert("Invalid input! Please enter a number between 0 and 6.");
    break;
}
