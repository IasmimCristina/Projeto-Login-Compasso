const currentPlace = document.querySelector('.place');

//Função que pegadará e criará o endereço do usuário e colocará na tela.
function createLocalization(lat, long) {  
  let params = 'zoom=18&addressdetails=1';
  let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&${params}`;

  function getAddress(address) {
    let state = address.state;
    let city = address.city;

    let stateLetter = getStateLetter(state);
    let textAddress = createTextLocalization(city, stateLetter);
    addAddressToPage(textAddress);

  }
  //Pega a resposta do endereço.
  fetch(url).then(response => response.json()).then((data) => {
    getAddress(data.address);
  })


}
// Pega as coordenadas do usuário.
navigator.geolocation.getCurrentPosition((position) => {
  createLocalization(position.coords.latitude, position.coords.longitude);
});







