
const authenticationLoginGeneral = e => {
  let isValid = false;
  e.preventDefault();
  errorLoginMessage();
  isValid = errorInputDecorationEmail();
  isValid = errorInputDecorationPassword();
  if (isValid) {
    let userTyped = getUserTyped(loginEmail.value, loginPass.value);
    validateUser(userTyped);
    
  }

};

loginButton.addEventListener("click", authenticationLoginGeneral);
