//Elementos do documento html.
const loginEmail = document.querySelector("#form-login-email");
const loginPass = document.querySelector("#form-login-password");

const iconUser = document.querySelector(".icon-user");
const iconPass = document.querySelector(".icon-password");

//Função que sempre carrega e avalia se deve ou não adicionar onfocus.
const animationLogin = setInterval(function () {

  if (loginEmail === document.activeElement) {
iconUser.classList.add("onfocus");
  } else {
iconUser.classList.remove("onfocus");
  }

  if (loginPass === document.activeElement) {
    iconPass.classList.add("onfocus");
      } else {
    iconPass.classList.remove("onfocus");
      }
})

