/* ---------------------------Directory----------------------------- */

const baseURL = "https://gatlingmcgee.github.io/wdd230/";
const membersURL = "https://gatlingmcgee.github.io/wdd230/chamber/data/members.json";

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
        aElement.textContent = member.url;
        phone.textContent = member.phone;
        address.textContent = member.address;
        name.textContent = member.name;
        aElement.target = '_blank';

        section.appendChild(name)
        section.appendChild(images).alt = `directoryimages`;
        section.appendChild(address);
        section.appendChild(phone);
        url.appendChild(aElement);
        section.appendChild(url);

        display.appendChild(section);
    });
}
  
getMembers();
