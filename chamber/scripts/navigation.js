// ADD link to HTML file
//<script src="scripts/navigation.js" defer></script>


// 🔹 General rule of thumb
// Start with const.
// If you get an error because you need to reassign, switch it to let.
// This keeps your code more predictable and prevents accidental reassignments.

// Store the selected elements that we are going to use.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the "show" class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');

});