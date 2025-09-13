// ADD link to HTML file
//<script src="scripts/createBusinessCard.js" defer></script>


// This file is to fetch the business members information from the 
// members.json file and create business cards for each

// const year = document.getElementById("currentYear");
// console.log(year);
// // use the date object
// const today = new Date();
// year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// let lastModified = document.lastModified;
// document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


// Declare a const variable named "url" that 
// contains the URL string of the JSON resource
// ***for this course we link to the github file url, not at the local file 
const url = 'https://chandafrey.github.io/wdd231/chamber/data/members.json';

// Declare a const variable name "cards" 
// that selects the HTML div element from the 
// document with an id value of "cards".
const cards = document.querySelector('#cards');

// Create an async defined function named 
// "getMemberData" to fetch data from the 
// JSON source url using the await fetch() method.
async function getMemberData() {
    // Store the response from the fetch() method 
    // in a const variable named "response".
    try {
        const response = await fetch(url);
    

    if (!response.ok) {
        throw new Error(`HTTP error!  status: ${response.status}`);
    }
    
    // Convert the response to a JSON object using the
    //  .json method and store the results in a 
    // const variable named "data".  
    const data = await response.json();
        // Add a console.table() expression method to check 
    // the data response at this point in the console window.

    // ***THIS DISPLAYS ON THE "CONSOLE" TAB WHEN YOU ARE 
    // IN THE "INSPECT" option - NOT ACTUALLY ON YOUR 
    // WEB PAGE ITSELF
    // The console.table() method is a great way to view the 
    // data in a table format. You can also use the console.log() 
    // method to view the data in a more traditional format. 
    // large amounts of data in a more organized way. 
    // ***THIS TESTS IN CONSOLE TO SEE IF THE FETCH WORKED
    console.table(data.members);

    // If it all checks out, note that the data returns a single property, 
    // an array of objects named "prophets".

    // Comment out the console line and call a function named 
    // "displayProphets" and include the "data.prophets" argument. 
    // Why do you send data.prophets versus just the data variable? 
    // The displayProphets() function expects an array parameter.
    // ***THIS FUNCTION IS FOR BUILDING THE CARDS...
    // It won't work until the displayProphets function is created BELOW
    displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching member data:", error);
        cards.textContent = "Unable to load member directory.";
  }
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
    // create a section element and store it in a variable named card using createElement(),
    let card = document.createElement('section');
    // create an h2 element and store it in a variable named "name",
    let name = document.createElement('h3');
    // create an img element and store it in a variable named "image",
    let image = document.createElement('img');
    // create a <p> for phone
    let phone = document.createElement('p');
    // create a <p> for date of websiteUrl 
    let websiteLink = document.createElement('a');
    // create a <p> for the address
    let address = document.createElement('p');

    // populate the heading element with the member's name 
    // using a template string to build the full name,
    name.textContent = member.name;
   
    // build the image element by setting the 
    // src, alt, loading, width, and height attributes using setAttribute().
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Image of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');

     // populate the phone
    phone.textContent = `Phone: ${member.phone}`;

    // populate the websiteUrl
    websiteLink.textContent = "Visit Website";
    websiteLink.setAttribute('href', member.websiteUrl);
    websiteLink.setAttribute('target', '_blank');

    // populate the address
    address.textContent = `${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;

    // Using appendChild() on the section element named "card", 
    // add the heading and image elements one at a time.
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(websiteLink);
    card.appendChild(address);

    // Finally, add the section card to the "cards" div 
    // that was selected at the beginning of the script file.
    cards.appendChild(card);
    });
}



// Call the function getProphetData() in the main line of 
// your .js code to test the fetch and response.
getMemberData();