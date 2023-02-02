const form = document.getElementById("form")
const userName = document.getElementById("fullname")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phonenumber")

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const formData = new FormData(form)
    const data = Object.fromEntries(formData);
    console.log(data)
  });