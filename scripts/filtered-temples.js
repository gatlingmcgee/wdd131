// copyright year
document.querySelector('#currentyear').textContent = new Date().getFullYear();

// last modified date
document.querySelector('#lastmodified').textContent = ` Last Modified: ${document.lastModified}`;

// hamburger menu toggle
const toggleButton = document.querySelector('#toggleMenu');
const menu = document.querySelector('#menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
    toggleButton.textContent = '❌';
  } else {
    toggleButton.textContent = '≡';
  }
});