
function openLoginScreen() {
  localStorage.clear();
  alert("Você se desconectou com sucesso! Esperamos ver você logo!");
  window.location.replace("http://127.0.0.1:5500/login.html");
}