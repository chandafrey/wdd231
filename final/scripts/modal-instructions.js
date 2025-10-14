// open the data modal-instructions-data.js file...
// add "export const" to the first line so it looks like this:
// export const instructions = [
// Next come to this file...
// add -  import {instructions} from '../data/modal-instructions-data.js'
import {instructions} from '../data//modal-instructions-data.js'
// Then log it to the console like this and make sure it shows up
// There should be an array of 8 items in the console on DevTools
console.log(instructions)

const container = document.querySelector("#modals");
// we need querySelectors for displaying the dialog box
const mydialog = document.querySelector("#mydialog");
// we need querySelector for displaying the list item
const item = document.querySelector("#mydialog h3");
// we need querySelector for displaying the instructions (p)
const components = document.querySelector("#components");

// we need querySelectors for displaying the close button
const myclose = document.querySelector("#mydialog button");
// add a single event listener
myclose.addEventListener("click", () => mydialog.close());

// Build instruction cards dynamically
instructions.forEach(x => {
    // create each card
    const card = document.createElement("div");
    // add a class="instruction-card" to the "card"
    card.classList.add("instruction-card");

    // create card heading
    const heading = document.createElement("h3");
    // set the heading content to the instruction item
    heading.textContent = x.item;
    // add heading to the card
    card.appendChild(heading);

    // LEARN MORE button
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

// Now we need a function to show the "stuff"
function showStuff(x) {
    // set the text inside the h3 in the dialog box to show the instruction item
    item.textContent = `Task: ${x.item}`;

     // Start building an HTML string for the instructions section.
    // We add "Instructions:" at the top (inside <strong> so it appears bold)
    // and then open a <ul> (unordered list) to hold the individual items.
    let instructionsHTML = "<strong>Instructions:</strong><ul>";

    // Loop through (iterate over) each instruction in the array x.instruction.
    // "b" is a placeholder that represents one instruction at a time.
    // The "+=" appends a new <li> (list item) for each instruction to the instructionsHTML string,
    // so we keep adding items instead of replacing the whole string each time.
    x.instructions.forEach(b => instructionsHTML += `<li>${b}</li>`);   
    
    // Close the <ul> list by adding the closing </ul> tag to the string.
    instructionsHTML += "</ul>";

    // Insert the finished HTML string (bold heading + list of instructions)
    // into the element with id="benefits" so it shows up in the dialog box.
    components.innerHTML = instructionsHTML;
    
}