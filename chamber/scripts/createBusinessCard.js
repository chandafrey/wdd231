// This file is to fetch the business members information from the 
// members.json file and create business cards for each



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
    const response = await fetch(url);
    
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
    console.log(data.members);

    // If it all checks out, note that the data returns a single property, 
    // an array of objects named "prophets".

    // Comment out the console line and call a function named 
    // "displayProphets" and include the "data.prophets" argument. 
    // Why do you send data.prophets versus just the data variable? 
    // The displayProphets() function expects an array parameter.
    // ***THIS FUNCTION IS FOR BUILDING THE CARDS...
    // It won't work until the displayProphets function is created BELOW
    displayMembers(data.members);
}