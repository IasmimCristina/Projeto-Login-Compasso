const states = [ //Const referente à função getCityLetter.
  { 'letter': 'AC', 'name': 'Acre' },
  { 'letter': 'AL', 'name': 'Alagoas' },
  { 'letter': 'AP', 'name': 'Amapá' },
  { 'letter': 'AM', 'name': 'Amazonas' },
  { 'letter': 'BA', 'name': 'Bahia' },
  { 'letter': 'CE', 'name': 'Ceará' },
  { 'letter': 'DF', 'name': 'Distrito Federal' },
  { 'letter': 'ES', 'name': 'Espírito Santo' },
  { 'letter': 'GO', 'name': 'Goías' },
  { 'letter': 'MA', 'name': 'Maranhão' },
  { 'letter': 'MT', 'name': 'Mato Grosso' },
  { 'letter': 'MS', 'name': 'Mato Grosso do Sul' },
  { 'letter': 'MG', 'name': 'Minas Gerais' },
  { 'letter': 'PA', 'name': 'Pará' },
  { 'letter': 'PB', 'name': 'Paraíba' },
  { 'letter': 'PR', 'name': 'Paraná' },
  { 'letter': 'PE', 'name': 'Pernambuco' },
  { 'letter': 'PI', 'name': 'Piauí' },
  { 'letter': 'RJ', 'name': 'Rio de Janeiro' },
  { 'letter': 'RN', 'name': 'Rio Grande do Norte' },
  { 'letter': 'RS', 'name': 'Rio Grande do Sul' },
  { 'letter': 'RO', 'name': 'Rondônia' },
  { 'letter': 'RR', 'name': 'Roraíma' },
  { 'letter': 'SC', 'name': 'Santa Catarina' },
  { 'letter': 'SP', 'name': 'São Paulo' },
  { 'letter': 'SE', 'name': 'Sergipe' },
  { 'letter': 'TO', 'name': 'Tocantins' },
]


function getStateLetter(state) {
  for (var i = 0; i < states.length; i++) {
    if (states[i].name == state) {
      state = states[i].letter;
      
      return state;
    }
  }
}