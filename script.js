const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordVerification = document.getElementById("password2")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validarInputs();

  const formData = new FormData(form)
  const data = Object.fromEntries(formData);
  console.log(data)
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.nextElementSibling;

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");

}
const setSucess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.nextElementSibling;

  errorDisplay.innerText = ''
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
const emailValido = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// using trim to remove empyt spaces after strings

const validarInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordVerificationValue = passwordVerification.value.trim();

  if (userNameValue === "") {
    setError(userName, "O nome de usuário é obrigatório");
  } else {
    setSucess(username);
  }


  if (emailValue === "") {
    setError(email, "O email é obrigatório");
  } 
  // Else if (emailValido(emailValue)) {
  //   setError(email, "Email inválido")
   else { setSucess(email); }



  if (passwordValue === "") {
    setError(password, "A senha é obrigatória");
  } else if (passwordValue.length < 8) {
    setError(password, "Senha deve conter pelo menos 8 caracteres.")
  }
  else {
    setSucess(password);
  }



  if (passwordVerificationValue === "") {
    setError(passwordVerification, "A senha é obrigatória");
  } else if (passwordVerificationValue !== passwordValue) {
    setError(passwordVerification, "A senha deverá ser a mesma")
  }
  else {
    setSucess(passwordVerification);
  }


};

