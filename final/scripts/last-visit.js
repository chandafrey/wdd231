// Referencethe sidebar element where the message will go
const messageBox = document.querySelector("#sidebar-message");
const messageText = document.querySelector("#message-text");
const closeBtn = document.querySelector("#close-btn");

// Get today's date in milliseconds
const now = Date.now();

// Check if we already have a last visit stored
let lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
    // first time visitor
    message = "Welcome!  Let us know if you have any questions.";
} else {
    // calculate difference in days
    const msBetweenVisits = now - parseInt(lastVisit);
    const daysBetweenVisits = Math.floor(msBetweenVisits / (1000 * 60 * 60 * 24));

    if (daysBetweenVisits < 1) {
        message = "Back so soon!  Awesome!";
    } else if (daysBetweenVisits === 1) {
        message = "You visited 1 day ago.";
    } else {
        message = "You last visited ${daysBetweenVisits} days ago.";
    }
}

// Display the message in the sidebar
messageText.textContent = message;

// Store the current visit time in localStorage for next time
localStorage.setItem("lastVisit", now);

// Handle close button
closeBtn.addEventListener("click", () => {
    messageBox.style.display = "none";
});


