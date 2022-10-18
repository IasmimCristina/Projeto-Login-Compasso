const currentWeather = document.querySelector(".weather")
let key = 'eaa5737c72467c9de528e9fb7973362e';

navigator.geolocation.getCurrentPosition((position) => {
  requestWeather(position.coords.latitude, position.coords.longitude)
});

function requestWeather(lati, longi) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=8db116479bcec246f67ef8b6af597c8b`;
  fetch(url).then((response) => response.json()).then(result => weatherDetails(result));
}

requestWeather();

