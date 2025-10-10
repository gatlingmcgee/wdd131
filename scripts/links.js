/* ---------------------------Links----------------------------- */
const baseURL = "https://gatlingmcgee.github.io/wdd230/";
const linksURL = "https://gatlingmcgee.github.io/wdd230/data/links.json";
//const linksURL = "https://gatlingmcgee.github.io/wdd230/data/links.json";

const ulElement = document.querySelector('#links-list');

async function getLinks() {
	const response = await fetch(linksURL);
	const data = await response.json();
    const weeks = data.weeks;
	console.log(data);
	console.log("hello")
	displayLinks(weeks);
  }


  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let liElement = document.createElement('li');

        liElement.textContent = `${week.week}: `;

        week.links.forEach((link) => {
            let aElement = document.createElement('a');
            aElement.href = link.url;
            aElement.textContent = link.title;
            aElement.target = '_blank';
            liElement.appendChild(aElement);
            liElement.appendChild(document.createTextNode(' | '));
        })

        if (liElement.lastChild.nodeValue === ' | ') {
            liElement.removeChild(liElement.lastChild);
        }

        ulElement.appendChild(liElement);
    });
}
  
  getLinks();