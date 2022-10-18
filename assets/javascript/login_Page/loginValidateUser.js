const bankUsers = [
  { 'email': 'admin@admin.com', 'password': 'admin' },
  { 'email': 'exemplo@exemplo.com', 'password': 'exemplo' },

];

const getUserTyped = (email, password) => {
  let userTyped = {
    email: email,
    password: password
  }
  return userTyped;
}

const validateUser = (userTyped) => {
  bankUsers.forEach(user => {
    if (userTyped.email == user.email && userTyped.password == user.password) {
      console.log("Funcionou! E-mail correto!");
      console.log(userTyped);
      // Transformar o objeto em string e salvar em localStorage:
      localStorage.setItem('user', JSON.stringify(userTyped));
      openHome();

    }
  })

}

