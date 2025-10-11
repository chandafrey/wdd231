const year = document.getElementById("currentYear");
console.log(year);
// use the date object
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


