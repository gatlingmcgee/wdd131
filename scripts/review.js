/* PASSWORD */
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const pfeedback = document.querySelector("#pfeedback");

confirm.addEventListener('focusout', controlar);

function controlar() {
    //console.log('inside the function')
    if (password.value !== confirm.value) {
        //console.log('no match')
        password.value = ""
        confirm.value = ""
        password.focus()
        pfeedback.textContent = "Values do not match. Please try again.";

    } else {
            //console.log('it is a match')
            pfeedback.textContent = "";
        }
    }

/* RANGE */
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


function goBack() {
	window.history.back();
}