//Lógica que adicionadará a decoração nos inputs quando erros ocorrerem.
const errorInputDecorationEmail = () => {
  if (loginEmail.value === "") {
    loginEmail.classList.add("error-active");
    return false;
  }
  else {
    loginEmail.classList.remove("error-active");
    return true;
  }
}
const errorInputDecorationPassword = () => {

  if (loginPass.value === "") {
    loginPass.classList.add("error-active");
    return false;
  }
  else {
    loginPass.classList.remove("error-active");
    return true;
  }
}