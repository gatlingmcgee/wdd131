// temple list
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://github.com/gatlingmcgee/wdd131/raw/main/week4/temple-images/converted/aba-nigeria.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://github.com/gatlingmcgee/wdd131/raw/main/week4/temple-images/converted/bentonville-arkansas.webp"
  },  
{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
];

// render temples
const container = document.querySelector("#temple-cards");

function renderTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy"
           width="300" height="200">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    container.appendChild(card);
  });
}

// intitial ;oad
renderTemples(temples);

// filters
document.querySelectorAll("#menu li a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.textContent;

    let filtered = temples;

    switch (filter) {
      case "Old":
        filtered = temples.filter(temple => parseInt(temple.dedicated) < 1900);
        break;
      case "New":
        filtered = temples.filter(temple => parseInt(temple.dedicated) > 2000);
        break;
      case "Large":
        filtered = temples.filter(temple => temple.area > 90000);
        break;
      case "Small":
        filtered = temples.filter(temple => temple.area < 10000);
        break;
      case "Home":
      default:
        filtered = temples;
    }

    renderTemples(filtered);
  });
});