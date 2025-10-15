// 🔹 General rule of thumb
// Start with const.
// If you get an error because you need to reassign, switch it to let.
// This keeps your code more predictable and prevents accidental reassignments.

// ==========================
// HAMBURGER MENU TOGGLE
// ==========================

// 1. Get references to the button (#ham-btn) and the navigation menu (#nav-bar)
// We'll use these to open/close the navigation when the button is clicked.
const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

// 2. Add a click event listener to the button
// Every time the button is clicked, we will:
//  - Toggle the "show" class on the button (for the hamburger icon to turn into X)
//  - Toggle the "show" class on the nav menu (to show/hide links)
hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');  // toggles button state (hamburger ↔ X)
    navBar.classList.toggle('open');   // toggles visibility of navigation links
    
    // Update aria-expanded
    const expanded = hamBtn.getAttribute('aria-expanded') === 'true' || false;
    hamBtn.setAttribute('aria-expanded', !expanded);

});
