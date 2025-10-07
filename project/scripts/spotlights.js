/* ---------------------------Spotlights----------------------------- */

const membersURL = "https://gatlingmcgee.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        const members = data.members;
        displayMembers(members);
        //console.log(data)
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function displayMembers(members) {
    const qualifiedMembers = members.filter(member => member.level === "Silver" || member.level === "Gold");


    shuffle(qualifiedMembers);
    qualifiedMembers.slice(0, 3).forEach((member, index) => {
        const cardElement = document.getElementById(`spotlight-card-${index + 1}`);
        if (cardElement) {

            
            cardElement.querySelector('h3').textContent = member.name;
            cardElement.querySelector('p:nth-of-type(1)').textContent = `Phone: ${member.phone}`;
            cardElement.querySelector('p:nth-of-type(2) a').href = member.url;
            cardElement.querySelector('img').src = member.logopath;
            cardElement.querySelector('img').alt = `${member.name} Logo`;
        }
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

getMembers();
