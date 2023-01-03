const logoutButton = document.querySelector('.logout');

function logoutAction() {
  let question = confirm("Deseja sair da sua sessão?");
  if (question == true) { openLoginScreen(); }
  else { window.location.reload(1); }

}

logoutButton.addEventListener('click', logoutAction);