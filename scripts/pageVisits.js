
/* ---------------------------Number of visits----------------------------- */

const visitInformation = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitInformation.textContent = numberVisits;
} else {
	visitInformation.textContent = `\nYou're the first visitor. Hello!`;
}

numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);


function goBack() {
	window.history.back();
}