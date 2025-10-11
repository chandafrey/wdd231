// ADD link to HTML file
//<script src="scripts/grid-list.js" defer></script>

// This file is to TOGGLE the cards display as GRID or LIST
// The toggle feature is for the larger.css file
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("#directory");

// function toggleView(view) {
//   display.classList.remove("grid", "list"); // remove both first
//   display.classList.add(view);              // then add the chosen one
// }

// gridbutton.addEventListener("click", () => toggleView("grid"));
// listbutton.addEventListener("click", () => toggleView("list"));
