/* ---------------------------Hamburger----------------------------- */

const button = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
	navigation.classList.toggle('open');
	button.classList.toggle('open');
});

function adjustOverlayPosition() {
    const overlay = document.querySelector('.overlay');
    const isOpen = document.querySelector('#hamburger-menu').classList.contains('open');

    if (isOpen) {
        overlay.style.left = '0';
    } else {
        overlay.style.left = '-100%';
    }
}

document.getElementById('hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
    adjustOverlayPosition();
});

function goBack() {
	window.history.back();
}