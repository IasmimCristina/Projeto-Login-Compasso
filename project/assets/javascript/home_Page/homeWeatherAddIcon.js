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