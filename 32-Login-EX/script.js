const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");
const usernameError = document.querySelector("#username-error");
const passwordError = document.querySelector("#password-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(usernameInput.value);
  console.log(passwordInput.value);

  if (usernameInput.value.length <= 3) {
    usernameError.classList.remove("hidden");
  } else {
    usernameError.classList.add("hidden");
  }
  if (passwordInput.value.length <= 5) {
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
  }
});
