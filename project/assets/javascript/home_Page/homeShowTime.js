const tempo = setInterval(function time() {

  let date = new Date();

  let horas = date.getHours();
  let minutos = date.getMinutes();

  //Adição do 0 à esquerda.
  if (horas < 10) horas = '0' + horas;
  if (minutos < 10) minutos = '0' + minutos;

  let tempo = horas + ":" + minutos;
  currentTime.textContent = tempo;
})