// Declare a const variable named "url" that 
// contains the URL string of the JSON resource
// ***for this course we link to the github file url, not at the local file 
const url = 'https://chandafrey.github.io/wdd231/final/data/jobs.json';
// const url = "../data/jobs.json"

// Declare a const variable name "cards" 
// that selects the HTML div element from the 
// document with an id value of "cards".
const cards = document.querySelector('#cards');

// Create an async defined function named 
// "getJobData" to fetch data from the 
// JSON source url using the await fetch() method.
async function getJobData() {
    // Store the response from the fetch() method 
    // in a const variable named "response".
    try {
        const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP error!  status: ${response.status}`);
    }
    
    // Convert the response to a JSON object using the
    //  .json method and store the results in a 
    // const variable named "data".
    // OR IN OTHER WORDS... parse JSON data
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
    console.table(data.jobs);

    // If it all checks out, note that the data returns a single property, 
    // an array of objects named "prophets".

    // Comment out the console line and call a function named 
    // "displayJobs" and include the "data.jobs" argument. 
    // Why do you send data.jobs versus just the data variable? 
    // The displayJobs() function expects an array parameter.
    // ***THIS FUNCTION IS FOR BUILDING THE CARDS...
    // It won't work until the displayJobs function is created BELOW
    displayJobs(data.jobs);
    } catch (error) {
        console.error("Error fetching job data", error);
        cards.textContent = "Unable to load job directory."
    }
}

    // CREATE displayJobs FUNCTION to create job cards
    // Define a function expression named "displayJobs" that handles a 
    // single parameter named "jobs" somewhere in your js file. 
    // Use an arrow expression to contain statements that will process 
    // the parameter value and build a card for each member.
    function displayJobs(jobs) {
    // ***OR YOU CAN WRITE THE SAME FUNCTION AS AN ARROW FUNCTION THIS WAY
    // const displayProphets = (prophets) => {

    // Inside the function, use a forEach loop with the 
    // array parameter to process each "job" record one at a time, 
    // creating a new card each time.
    jobs.forEach(job => {
        // create a section element and store it in a variable named card using createElement(),
        let card = document.createElement('section');
        // create an h2 element and store it in a variable named "title"
        let title = document.createElement('h3');
        // create an img element and store it in a variable named "image_url"
        let image_url = document.createElement('img');
        // create a <p> element and store it in a variable named "salary_UT"
        let salary_UT = document.createElement('p');
        // create a <p> element and store it in a variable named "description"
        let description = document.createElement('p');

        // populate the heading element with the job title using .textContent
        title.innerHTML = job.title;
        // buile the image element by setting the src, alt, loading, width and height
        // using .setAttribute
        image_url.setAttribute('src', job.image_url);
        image_url.setAttribute('alt', `Image of ${job.title}`);
        image_url.setAttribute('loading', 'lazy');
        image_url.setAttribute('width', '200');
        image_url.setAttribute('height', '300');

        // populate the salary_UT
        salary_UT.innerHTML = `<strong>Salary: </strong>${job.salary_UT}`;

        // populate the description
        description.innerHTML = `<strong>Description:  </strong>${job.description}`;


        
        // Using appendChild() on the section element named "card", 
        // add the heading, image, and <p> elements one at a time.
        card.appendChild(image_url);
        card.appendChild(title);

        card.appendChild(salary_UT);
        card.appendChild(description);

        // Finally, add the section card to the "cards" div 
        // that was selected at the beginning of the script file.
        cards.appendChild(card);
        
    });
}

// don’t forget to CALL the function to actually run it:
getJobData();