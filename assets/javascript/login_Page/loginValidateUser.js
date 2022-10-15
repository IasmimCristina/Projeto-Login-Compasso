const bankUsers = [
  {'email':'admin@admin.com','password': 'admin'},
  {'email':'exemplo@exemplo.com','password': 'exemplo'},

];

const getUserTyped = (email, password) => {
let userTyped = {
  email: email,
  password: password
}
return userTyped;
}

const validateUser = (userTyped) => {
// let email = loginEmail.value.trim();
// // let email = 'exemplo@exemplo.com';
// let password = loginPass.value.trim();
bankUsers.forEach(user => {
if(userTyped.email == user.email && userTyped.password == user.password) {
console.log("Funcionou! E-mail correto!");
console.log(userTyped);
openHome();

} else {
// console.log("Não funcionou! E-mail incorreto!");
// console.log(userTyped);

} //Corrija os detalhes!!
})

}

// validateUser();