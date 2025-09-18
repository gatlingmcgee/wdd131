const state = 'Oklahoma, USA';
document.getElementById('state-placeholder').textContent = state;

const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


const url = '//api.openweathermap.org/data/2.5/weather?lat=36.06&lon=-95.80&appid=25baae6a81058afccd7517c966ed3aed&units=imperial';

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data); //for testing
			displayResults(data);
		} else {
			throw Error (await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(data) {
	//console.log('hello')
	myTown.innerHTML = data.name
	myDescription.innerHTML = data.weather[0].description;
	myTemperature.innerHTML = `${data.main.temp}&deg;F`
	const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	myGraphic.setAttribute('src', iconsrc)
	myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();

function goBack() {
	window.history.back();
}



