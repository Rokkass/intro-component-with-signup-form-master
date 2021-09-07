const submit = document.querySelector(".submit-form");
const errorIcon = document.querySelectorAll(".error-icon");
const labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll(".input");
const confirmation = document.querySelector(".confirmation");

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(e) {
    const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regularExpression.test(e)) {
        return false;
    }
    return true;
}
function error(e) {
    errorIcon[e].classList.add("display");
    errorIcon[e].classList.remove("displaynt");
    labels[e].classList.add("display");
    labels[e].classList.remove("displaynt");
    inputs[e].classList.add("redBorder");
}

function noError(e) {
    errorIcon[e].classList.add("displaynt");
    errorIcon[e].classList.remove("display");
    labels[e].classList.add("displaynt");
    labels[e].classList.remove("display");
    inputs[e].classList.remove("redBorder");
}

submit.addEventListener("click", (e) => {
    e.preventDefault();

    inputs = document.querySelectorAll(".input");
    let counter = 0;

    for (let i = 0; i < 4; i++) {
        // if (inputs[i].value.length == "") {
        if (!inputs[i].value) {
            error(i);
        } else {
            if (i < 2) {
                noError(i);
                counter++;
            } else if (i == 2 && validateEmail(inputs[2].value)) {
                noError(i);
                counter++;
            } else if (i == 3 && validatePassword(inputs[3].value)) {
                noError(i);
                counter++;
            } else {
                error(i);
            }
        }
    }
    if (counter == 4) {
        confirmation.classList.add("slideDown");
        setTimeout(function () {
            confirmation.classList.remove("slideDown");
        }, 3000);
        setTimeout(function () {
            for (let i = 0; i < 4; i++) {
                inputs[i].value = "";
            }
        }, 500);
    }
});
