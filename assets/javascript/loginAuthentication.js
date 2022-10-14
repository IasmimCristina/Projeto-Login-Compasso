


const authenticationLoginGeneral = e => {
  let isValid = false;
  e.preventDefault();
  errorLoginMessage();
  isValid = errorInputDecorationEmail();
  isValid = errorInputDecorationPassword();
  if (isValid) {
    getUserTyped(loginEmail, loginPassword);
  }

};


loginButton.addEventListener("click", authenticationLoginGeneral);
//errorLoginFunction();