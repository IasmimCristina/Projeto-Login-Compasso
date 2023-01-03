function weatherDetails(result) {

  //Mudança dos ícones de clima.
  let infoWeather = result.weather[0].id; 
  addIconToPage(infoWeather);
  //-----------------------------

  //Adição do clima à página.
  let currentTemp = result.main.temp;
  let tempString = currentTemp.toString();
  tempString = tempString.substring(0, 2);
  tempString += '°';  
  addWeatherToPage(tempString);
  //-----------------------------

}