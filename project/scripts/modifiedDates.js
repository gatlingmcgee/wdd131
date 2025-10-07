/* ---------------------Last Modified Date------------------------ */

const yearElement = document.getElementById('currentYear');
yearElement.textContent = new Date().getFullYear();

const modifiedElement = document.getElementById('lastModified');
modifiedElement.textContent = document.lastModified;