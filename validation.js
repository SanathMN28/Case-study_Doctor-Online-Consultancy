function validFname() {
    var fname = document.getElementById("fname").value;
    var pattern = /[^a-zA-Z]/;

    if (pattern.test(fname) === true || fname === "") {
        alert("Please enter valid fname without any space or special character");
        document.getElementById("fname").value = "";
        document.getElementById("fname").focus();

    }
    
}
function validLname() {
    var Lname = document.getElementById("lname").value;
    var pattern = /[^a-zA-Z]/;
    if (pattern.test(Lname) === true || Lname === "") {
        alert("Please enter valid lname without any space or special character");
        document.getElementById("lname").value = "";
        document.getElementById("lname").focus();
    }
}

function validMob() {
    var mob = document.getElementById("mob").value;
    var pattern = /^[789][0-9]{9}/;
    if (pattern.test(mob) === false || mob.length>10) {
        alert("Please enter valid mobile number");
        document.getElementById("mob").value = "";
        document.getElementById("mob").focus();
    }
}

function validEmail() {
    var mail = document.getElementById("mail").value;
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (pattern.test(mail) === false) {
        alert("Please enter valid email address");
        document.getElementById("mail").value = "";
        document.getElementById("mail").focus();
    }
}

function validCity() {
    var city = document.getElementById("city").value;
    var pattern = /[^a-zA-Z]/;

    if (pattern.test(city) === true || city === "") {
        alert("Please enter valid city name");
        document.getElementById("city").value = "";
        document.getElementById("city").focus();

    }

}

function validState() {
    var state = document.getElementById("state").value;
    var pattern = /[^a-zA-Z]/;

    if (pattern.test(state) === true || state === "") {
        alert("Please enter valid state name");
        document.getElementById("state").value = "";
        document.getElementById("state").focus();

    }

}

function validCountry() {
    var country = document.getElementById("country").value;
    var pattern = /[^a-zA-Z]/;

    if (pattern.test(country) === true || country === "") {
        alert("Please enter valid country name");
        document.getElementById("country").value = "";
        document.getElementById("country").focus();

    }

}

function validPostal() {
    var postal = document.getElementById("pzip").value;
    if (postal.length!=6) {
        alert("Please enter valid postal code");
        document.getElementById("pzip").value = "";
        document.getElementById("pzip").focus();
    }
}

function validPassword() {
    var pasw = document.getElementById("psw").value;
    var pattern = /.*[a-zA-Z0-9]/;
    if (pattern.test(pasw) === false || pasw.length<8) {
        alert("Please enter strong password must contains special characters,digits. Length must be greater than 8 characters");
        document.getElementById("psw").value = "";
        document.getElementById("psw").focus();
    }
}

function validRePassword() {
    var pasw = document.getElementById("psw").value;
    var repsw = document.getElementById("repsw").value;
    if (pasw!=repsw) {
        alert("Password miss match");
        document.getElementById("repsw").value = "";
        document.getElementById("repsw").focus();
    }
}