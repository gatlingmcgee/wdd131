/* ---------------------------Dark Mode----------------------------- */

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const gridSection1 = document.getElementById('testing');
const gridSection2 = document.getElementById('testing2');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#333333";
        main.style.color = "#eee";
		modeButton.textContent = "🔆";
        gridSection1.style.background = "#8c8c8c";
        gridSection1.style.color = "#000"
        gridSection2.style.background = "#8c8c8c";
        gridSection2.style.color = "#000"
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
        gridSection1.style.background = "#eee";
        gridSection2.style.background = "#eee";
	}
});

function goBack() {
	window.history.back();
}
