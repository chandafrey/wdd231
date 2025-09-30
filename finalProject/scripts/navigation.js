// 🔹 General rule of thumb
// Start with const.
// If you get an error because you need to reassign, switch it to let.
// This keeps your code more predictable and prevents accidental reassignments.

// ==========================
// HAMBURGER MENU TOGGLE
// ==========================

// 1. Get references to the button (#ham-btn) and the navigation menu (#nav-bar)
// We'll use these to open/close the navigation when the button is clicked.
const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");

// 2. Add a click event listener to the button
// Every time the button is clicked, we will:
//  - Toggle the "show" class on the button (for the hamburger icon to turn into X)
//  - Toggle the "show" class on the nav menu (to show/hide links)
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');  // toggles button state (hamburger ↔ X)
    navlinks.classList.toggle('show');   // toggles visibility of navigation links
});
