function validate() {
  if(password.value == pwdConfirm.value) {
    pwdConfirm.setCustomValidity("");
  }
  else {
    pwdConfirm.setCustomValidity("Passwords do not match");
  }
}

const password = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#confirm");

password.addEventListener("change", () => validate());
pwdConfirm.addEventListener("keyup", () => validate());