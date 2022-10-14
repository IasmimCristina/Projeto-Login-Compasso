// const loginEmail = document.querySelector("#form-login-email");
// const loginPass = document.querySelector("#form-login-password");
const loginButton = document.querySelector(".login-button");
const errorMessage = document.querySelector(".error-message");

const errorLoginMessage = () => {
  console.log("Login button clicked");
  if (loginEmail.value === "" || loginPass.value === "") {
    errorMessage.textContent = "Ops, usuário ou senha inválidos. Tente novamente!";
  } else {
    errorMessage.textContent = "";

  }
  console.log("Login function called");
}



// errorLoginFunction();