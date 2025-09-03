const users = [
  { id: 1, username: "kamy", password: "dwkodu23231" },
  { id: 2, username: "musso", password: "ksjdheed" },
  { id: 3, username: "sog", password: "sog2002" },
  { id: 4, username: "shadi", password: "goodcat" },
  { id: 5, username: "tania", password: "mothercat10019" },
];
const enterUsername = prompt("Your Username : ");

if (enterUsername.trim().length === 0) {
  alert("No No :)");
} else {
  let realUser = users.find(function (user) {
    return user.username === enterUsername;
  });
  console.log(realUser);
  if (realUser === undefined) {
    alert("First Register :) ");
  } else {
    alert("Your Password --> " + realUser.password);
  }
}
