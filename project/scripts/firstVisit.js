/* ---------------------------First Visit Message----------------------------- */

const visitInformation = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitInformation.textContent = numberVisits;
} else {
	visitInformation.textContent = `\nWelcome! Let us know if you have any questions.`;
}

numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);
