/* ---------------------------Directory----------------------------- */

const baseURL = "https://gatlingmcgee.github.io/wdd131/";
const membersURL = "https://gatlingmcgee.github.io/wdd131/project/data/members.json";

const display = document.querySelector('#members-list');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    const members = data.members;
    //console.log(data);
    displayMembers(members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let article = document.createElement('article');
        let section = document.createElement('section');
        let url = document.createElement('p');
        let images = document.createElement('img');
        let aElement = document.createElement('a');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        

        aElement.href = member.url;
        images.src = member.logopath;
        aElement.textContent = "Find Me Here!";
        phone.textContent = member.phone;
        address.textContent = member.address;
        name.textContent = member.name;
        aElement.target = '_blank';

        const star = document.createElement('span');
        star.classList.add('favorite-star');
        star.textContent = isPetInFavorites(member) ? '★' : '☆';
        star.style.cursor = 'pointer';
        star.style.color = isPetInFavorites(member) ? 'yellow' : '#f3ffee';

        star.addEventListener('click', () => toggleFavorite(member, star));

        section.appendChild(name)
        section.appendChild(images).alt = `directoryimages`;
        section.appendChild(address);
        section.appendChild(phone);
        url.appendChild(aElement);
        section.appendChild(url);
        section.appendChild(star);

        display.appendChild(section);
    });
}
  
/* ---------------------------Favorites----------------------------- */

function isPetInFavorites(pet) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.some(favPet => favPet.name === pet.name);
}

function toggleFavorite(pet, star) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const petIndex = favorites.findIndex(favPet => favPet.name === pet.name);

  if (petIndex === -1) {
    favorites.push(pet);
    star.textContent = '★';
    star.style.color = 'yellow';
  } else {
    favorites.splice(petIndex, 1);
    star.textContent = '☆';
    star.style.color = '#f3ffee';
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

getMembers();