// open the data mem-level-data.js file...
// add "export const" to the first line so it looks like this:
// export const membershipLevels = [
// Next come to this file...
// add -  import {membershipLevels} from '../data/mem-level-data.js'
import {membershipLevels} from '../data/mem-level-data.js'
// Then log it to the console like this and make sure it shows up
// There should be an array of 4 items in the console on DevTools
console.log(membershipLevels)

const container = document.querySelector("#modals");
// we need querySelectors for displaying the dialog box
const mydialog = document.querySelector("#mydialog")
// we need querySelector for displaying level
const level = document.querySelector("#mydialog h4")
// we need querySelector for displaying advertising
const advertising = document.querySelector("#advertising")
// we need querySelector for displaying benefits
const benefits = document.querySelector("#benefits")

// we need querySelectors for displaying the close button
const myclose = document.querySelector("#mydialog button")
// Add a single close event listener
myclose.addEventListener("click", () => mydialog.close())

// Build membership Level cards dynamically
membershipLevels.forEach(x => {
    // Create each card
    const card = document.createElement("div");
    // Add a class="membership-level-card" to the "card"
    card.classList.add("membership-level-card");

    // Card Heading
    const heading = document.createElement("h3");
    // set the heading content to the membership level
    heading.textContent = `${x.level} Membership Level`;
    // add heading to the card
    card.appendChild(heading);

    // "LEARN MORE" button
    const button = document.createElement("button");
    // set the button content to the words "Learn More"
    button.textContent = "Learn More";
    // add a class="learn-more" to button
    button.classList.add("learn-more");
    // add addEventListener to "showStuff"
    button.addEventListener("click", () => {
        showStuff(x);
        mydialog.showModal();
    });
    
    // add button to card
    card.appendChild(button);

    // add card to container
    container.appendChild(card);
});

function showStuff(x) {
    // Set the text inside the <h4> in the dialog box to show the membership level.
    // Example result: "Level: Gold"
    level.textContent = `Level: ${x.level}`;

    // Set the text inside the <p id="advertising"> to show the advertising info.
    // Example result: "Advertising: 3 spotlight positions on the home page"
    advertising.textContent = `Advertising: ${x.advertising}`;
    
    // Start building an HTML string for the benefits section.
    // We add "Benefits:" at the top (inside <strong> so it appears bold)
    // and then open a <ul> (unordered list) to hold the individual items.
    let benefitsHTML = "<strong>Benefits:</strong><ul>";
    
    // Loop through (iterate over) each benefit in the array x.benefits.
    // "b" is a placeholder that represents one benefit at a time.
    // The "+=" appends a new <li> (list item) for each benefit to the benefitsHTML string,
    // so we keep adding items instead of replacing the whole string each time.
    x.benefits.forEach(b => benefitsHTML += `<li>${b}</li>`);   

    // Close the <ul> list by adding the closing </ul> tag to the string.
    benefitsHTML += "</ul>";

    // Insert the finished HTML string (bold heading + list of benefits)
    // into the element with id="benefits" so it shows up in the dialog box.
    benefits.innerHTML = benefitsHTML;
}