const loginButton = document.querySelector(".login-button");
const errorMessage = document.querySelector(".error-message");

//Exibirá a mensagem de erro.
const errorLoginMessage = () => {
  if (loginEmail.value === "" || loginPass.value === "") {
    errorMessage.textContent = "Ops, usuário ou senha inválidos. Tente novamente!";
  } else {
    errorMessage.textContent = "";

  }

}


