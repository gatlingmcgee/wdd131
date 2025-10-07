
/* ---------------------------Current Weather BA---------------------------- */

//35.9434255252221, -95.88567013298344 CT
//=49.75&lon=6.64 BA
//=36.06&lon=-95.80 AL
//=-33.92&lon=18.42 GE
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.06&lon=-95.80&appid=25baae6a81058afccd7517c966ed3aed&units=imperial';

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecastResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

forecastApiFetch();

function displayForecastResults(data) {
    if (data.list && data.list.length > 0) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const afterTomorrow = new Date(today);
        afterTomorrow.setDate(today.getDate() + 2);
        const thirdDay = new Date(today);
        thirdDay.setDate(today.getDate() + 3);

        const nextThreeDaysForecast = data.list.filter(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getDate() === tomorrow.getDate() ||
                forecastDate.getDate() === afterTomorrow.getDate() ||
                forecastDate.getDate() === thirdDay.getDate();
        });

        nextThreeDaysForecast.forEach(item => {
            const forecastDate = new Date(item.dt * 1000);
            let dayId;
            if (forecastDate.getDate() === tomorrow.getDate()) {
                dayId = 'day1';
            } else if (forecastDate.getDate() === afterTomorrow.getDate()) {
                dayId = 'day2';
            } else if (forecastDate.getDate() === thirdDay.getDate()) {
                dayId = 'day3';
            }

            const figureElement = document.getElementById(dayId);
            const temperature = figureElement.querySelector('.temperature');
            const icon = figureElement.querySelector('.icon');
            const description = figureElement.querySelector('.description');
            const dayName = figureElement.querySelector('.day');
            const currentTemp = document.querySelector('#current-temp');
            const currentDesc = document.querySelector('#current-desc');

            //currentDesc.innerHTML = `${item.weather[0].description}`;
            currentDesc.innerHTML = capitalizeFirstLetter(item.weather[0].description);

            currentTemp.innerHTML = `${item.main.temp}&deg;F`;
            temperature.innerHTML = `${item.main.temp}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            const desc = item.weather[0].description;
            icon.setAttribute('src', iconsrc);
            icon.setAttribute('alt', desc);
            description.textContent = ` ${capitalizeCaption(desc)}`;

            const options = { month: 'short', day: 'numeric' };
            dayName.innerHTML = forecastDate.toLocaleString('en-EN', options);

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }         




            
        });
    }
}

function capitalizeCaption(phrase) {
    let words = phrase.split(' '); 
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } 
    let capitalizedPhrase = words.join(" ");
    return capitalizedPhrase


    
};


