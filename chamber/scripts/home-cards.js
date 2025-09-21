// This file is to fetch the data from members.json and
// create Spotlight Business Cards for the HOME (index.html) PAGE

// ------------------------
// **In this example, the fetch() method returns a promise when attempting to call 
// with the URL of the resource we want to fetch. The await keyword is used to 
// wait for the promise to resolve before continuing with the code. This is important 
// because the fetch() method is asynchronous, meaning that it does not block the 
// execution of the code while it waits for the response. The means that this code 
// will need to be inside an async function. The await keyword can only be used inside 
// an async as shown in the next example.
// **You can then use the .json() method on the response object to parse the JSON data 
// and use it in your application. The .json() method also returns a promise, so you 
// can use the await keyword to wait for the data to be parsed before using it
// -------------------------

// 1.  Start with assigning the members.json file to a URL variable
// ***for this course we link to the github file url, not at the local file 
const url = 'https://chandafrey.github.io/wdd231/chamber/data/members.json';
// **only using this local file to see most of my data when offline...
// when ready to be online - COMMENT OUT!!!
// const url = "data/members.json";

// 2.  Declare a const variable name "cards" 
// that selects the HTML div element from the 
// document with an ID value of "cards".
const cards = document.querySelector('#cards');

// 3.  Create an ASYNC defined function named 
// "getData" to fetch data from the 
// JSON source url using the AWAIT FETCH() method.
async function getData() {
    // Store the response from the fetch() method 
    // in a const variable named "response".
    const response = await fetch(url);
    // 4.  Convert the response to a JSON object using the
    //  .json method and store the results in a 
    // const variable named "data".  
    const data = await response.json();
        // Add a console.table() expression method to check 
    // the data response at this point in the console window.

    // ***THIS DISPLAYS ON THE "CONSOLE" TAB WHEN YOU ARE 
    // IN THE "INSPECT" option - NOT ACTUALLY ON YOUR WEB PAGE ITSELF
    // The console.table() method is a great way to view the 
    // data in a table format. You can also use the console.log() 
    // method to view the data in a more traditional format. 
    // large amounts of data in a more organized way. 
    // ***THIS TESTS IN CONSOLE TO SEE IF THE FETCH WORKED
    console.table(data.members);

    // Comment out the console line and call a function named 
    // "displayProphets" and include the "data.prophets" argument. 
    // Why do you send data.prophets versus just the data variable? 
    // The displayProphets() function expects an array parameter.
    // ***THIS FUNCTION IS FOR BUILDING THE CARDS...
    // It won't work until the displayProphets function is created BELOW
    displayMembers(data.members);
 
}


// CREATE displayMembers FUNCTION to create member cards
// Define a function expression named "displayMembers" that handles a 
// single parameter named "members" somewhere in your js file. 
// Use an arrow expression to contain statements that will process 
// the parameter value and build a card for each member.
function displayMembers(members) {
    // ***OR YOU CAN WRITE THE SAME FUNCTION AS AN ARROW FUNCTION THIS WAY
    // const displayProphets = (prophets) => {

    // Inside the function, use a forEach loop with the 
    // array parameter to process each "prophet" record one at a time, 
    // creating a new card each time.
    members.forEach((member) => {
    // Create the section for the whole card
    let card = document.createElement('section');

    // -------------------------------
    // Create the wrapper div for name + membership
    let nameDiv = document.createElement('div');
    // Add a class of "name-tag"
    nameDiv.classList.add("name-tag");

     // Create the name element as h4
    let name = document.createElement('h4');
    // populate the name
    name.textContent = member.name;

    // Create the membership element as h5
    let membership = document.createElement('h5');
    membership.textContent = member.membership;

    // Put h4 and h5 inside nameDiv
    nameDiv.appendChild(name);
    nameDiv.appendChild(membership);
    //------------------------------- 
    
    // create an img element and store it in a variable named "image",
    let image = document.createElement('img');
    // build the image element by setting the 
    // src, alt, loading, width, and height attributes using setAttribute().
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Image of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');
    // -------------------------------

    // Create contact info:
    // create a <p> for email
    let email = document.createElement('p');
    // populate the email
    email.textContent = `EMAIL:  ${member.email}`; 

    // create a <p> for phone
    let phone = document.createElement('p');
    // populate the phone
    phone.textContent = `PHONE: ${member.phone}`;   

    // create a <p> and put <a> inside it
    let websiteP = document.createElement('p');
    websiteP.textContent = "URL: ";

    // create <a> and use URL() to grab just the hostname (domain)
    let websiteLink = document.createElement('a');
    let urlObj = new URL(member.websiteUrl); // safe if your JSON always has full URLs

    websiteLink.href = urlObj.href;
    websiteLink.textContent = urlObj.hostname; // just "burtbrothers.com"
    websiteLink.target = "_blank";
    websiteLink.rel = "noopener noreferrer"; // security best practice

    websiteP.appendChild(websiteLink);


    // Append EVERYTHING to the card
    // Don't forget the nameDiv
    // Using appendChild() on the section element named "card", 
    // add the elements one at a time IN THE ORDER YOU WANT THEM.
    card.appendChild(nameDiv);
    card.appendChild(image);
    card.appendChild(email);
    card.appendChild(phone);
    card.appendChild(websiteLink);

    // Finally, add the section card to the "cards" div 
    // that was selected at the beginning of the script file.
    cards.appendChild(card);
    });
}
getData();

// Function to Randomly display cards ------------------------------------
const randomCards = document.querySelector("#random");
randomCards.addEventListener("click, () => {
        document.querySelector("#cards").innerHTML = "";
        createRandomCard(cards.filter.random(card => card.membership === "1" || "2"));



// Call function when page loads
displaySpotlights();