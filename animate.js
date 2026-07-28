console.log("hihihi");

let passwordbtn = document.getElementById("btnlogin");

passwordbtn.addEventListener("click", user);

const passwordField = document.getElementById("password");

// Run this when the password is wrong
function showPasswordError() {
  passwordField.classList.add("error-input");
  passwordField.value = "";
  passwordField.placeholder = "Incorrect Login"; // Clear text so placeholder shows
}

function user() {
    let passwordinp = document.getElementById("password").value;
    let userinp = document.getElementById("user").value;
    let realuser = "AnijahL";
    let realpassword = "horizonSpark";

    if (userinp === realuser && passwordinp === realpassword) {
        window.location.href="./Home/home.html";
    } else {
       showPasswordError();
    }
}