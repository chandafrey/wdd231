const url = 'https://chandafrey.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector("#cards");

// Create Function to Randomly Display Spotlight Cards
async function displaySpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    // mapping numbers -> membership names 
    const membershipNames = {
        1:  "Member",
        2:  "Silver",
        3:  "Gold",
    };

    // Filter to silver(2) and gold(3) members
    const elegibleMembers = data.members.filter((member) =>
        member.membership === 2 ||
        member.membership === 3
    );

    // Shuffle the filtered array
    const shuffled = elegibleMembers.sort(() => Math.random() - 0.5);

    // Pick 2 or 3 Randomly
    const numberToShow = Math.floor(Math.random() *2) + 2;
    const selected = shuffled.slice(0, numberToShow);
    
    // Clear existing cards
    const cardsContainer = document.querySelector("#cards");
    cardsContainer.innerHtml = "",

    // Build and append the Spotlight Cards
    selected.forEach((member) => {
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
        membership.textContent = membershipNames[member.membership];

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
        
        // Create the wrapper div for contact details
        let contactDiv = document.createElement('div');
        // Add a class of "name-tag"
        contactDiv.classList.add("contact-details");

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

        // Put h4 and h5 inside nameDiv
        contactDiv.appendChild(email);
        contactDiv.appendChild(phone);
        contactDiv.appendChild(websiteP);
        //------------------------------- 
        // Append EVERYTHING to the card
        // Don't forget the nameDiv
        // Using appendChild() on the section element named "card", 
        // add the elements one at a time IN THE ORDER YOU WANT THEM.
        card.appendChild(nameDiv);
        card.appendChild(image);
        // card.appendChild(email);
        // card.appendChild(phone);
        // card.appendChild(websiteLink);
        card.appendChild(contactDiv);

        // Finally, add the section card to the "cards" div 
        // that was selected at the beginning of the script file.
        cardsContainer.appendChild(card);
    });
}
displaySpotlights();

