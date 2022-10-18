const currentWeather = document.querySelector(".weather")
let key = 'eaa5737c72467c9de528e9fb7973362e';

let currentLati; //Latitude
let currentLongi; //Longitude

navigator.geolocation.getCurrentPosition((position) => {

  requestWeather(position.coords.latitude, position.coords.longitude)
});

function addWeatherToPage(tempString) {
  currentWeather.textContent = tempString;
}

function requestWeather(lati, longi) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=8db116479bcec246f67ef8b6af597c8b`;
  fetch(url).then((response) => response.json()).then(result => weatherDetails(result));


}

const currentIconWeather = document.querySelector('.icon-weather');
function addIconToPage(infoWeather) {  
  if (infoWeather == 800) {
    currentIconWeather.classList.add('fa-cloud-sun')  

  } else if (infoWeather >= 200 && infoWeather <= 232) {
    currentIconWeather.classList.add('fa-cloud-showers-heavy')    

  } else if (infoWeather >= 600 && infoWeather <= 622) {
    currentIconWeather.classList.add('fa-snowflake')   

  } else if (infoWeather >= 701 && infoWeather <= 781) {
    currentIconWeather.classList.add('fa-smog')   

  } else if (infoWeather >= 801 && infoWeather <= 804) {
    currentIconWeather.classList.add('fa-cloud')   

  } else if ((infoWeather >= 500 && infoWeather <= 531) || (infoWeather >= 300 && infoWeather <= 321)) {
    currentIconWeather.classList.add('fa-cloud-rain')    

  }
}


function weatherDetails(result) { 

  //Mudança dos ícones de clima.
  let infoWeather = result.weather[0].id;
  console.log(infoWeather);
  addIconToPage(infoWeather);
  //-----------------------------

  let currentTemp = result.main.temp;
  let tempString = currentTemp.toString();
  tempString = tempString.substring(0, 2);
  tempString += '°';
  console.log(tempString);
  addWeatherToPage(tempString);

}
requestWeather();

