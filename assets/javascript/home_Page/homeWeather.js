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
  // setInterval(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=8db116479bcec246f67ef8b6af597c8b`;
    console.log(url);
    fetch(url).then((response) => response.json()).then(result => weatherDetails(result));
  // },100000) // A cada 5 horas.


}


function weatherDetails(result) {
  console.log(result.main.temp);
  let currentTemp = result.main.temp;
  let tempString = currentTemp.toString();
  let exemplo = '41597'
  tempString = tempString.substring(0, 2);
  tempString += '°';
  console.log(tempString);
  addWeatherToPage(tempString);

}
requestWeather();

