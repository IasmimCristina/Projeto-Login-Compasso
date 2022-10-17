//Constantes:
const currentDate = document.querySelector('.date');
const currentTime = document.querySelector('.time');


//Funções:
const dataExtenso = setInterval(function time() {
  //Arrays com os valores necessários.
  let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
  let semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];



  // Data sendo pêga. 
  let date = new Date();

  let dataNumero = date.getDate();
  let dataMes = date.getMonth();
  let dataAno = date.getFullYear();
  let dataSemana = date.getDay();

  //Modelo da data escrita.
  let dataExtenso = semana[dataSemana] + ", " + dataNumero + " de " + meses[dataMes] + " de " + dataAno;

  //Data sendo escrita.
  currentDate.textContent = dataExtenso;

})


