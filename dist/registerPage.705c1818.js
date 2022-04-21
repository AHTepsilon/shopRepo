const registerForm = document.getElementById("form_register");
let username = document.getElementById("form_register_username").value;
let nameValue = document.getElementById("form_register_name").value;
let lastName = document.getElementById("form_register_lastName").value;
let email = document.getElementById("form_register_email").value;
let phoneNumber = document.getElementById("form_register_phoneNumber").value;
let password = document.getElementById("form_register_password").value;
registerForm.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    username = document.getElementById("form_register_username").value;
    nameValue = document.getElementById("form_register_name").value;
    lastName = document.getElementById("form_register_lastName").value;
    email = document.getElementById("form_register_email").value;
    phoneNumber = document.getElementById("form_register_phoneNumber").value;
    password = document.getElementById("form_register_password").value;
    console.log(username + ", " + nameValue + ", " + lastName + ", " + email + ", " + phoneNumber + ", " + password);
});

//# sourceMappingURL=registerPage.705c1818.js.map
