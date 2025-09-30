import {places} from '../data/places-data.js'
// Then log it to the console like this and make sure it shows up
// There should be an array of 4 items in the console on DevTools
console.table(places)

// Reference #allPlaces where we will showHere the cards
const showHere = document.querySelector("#allPlaces")

// Create a function to loop thru the array of json items called 'places'
function displayItems(places) {
    places.forEach(x => {
        // build the card element first
        const card = document.createElement('div')
        // build the photo element
        const photo = document.createElement('img')
        // // add the src and alt for the photo (use backticks)
        photo.src = x.photo_link
        photo.alt = x.name
        // build the title element
        const title = document.createElement('h2')
        // add the text for the h2 element with .innerText
        title.innerText = x.name
        // build the address element 
        const address = document.createElement('address')
        // add the text for the address...not sure why this can be 'address' instead of 'p'
        address.innerText = x.address
        // build the description element
        const description = document.createElement('p')
        // add the text for the description with .innerText
        description.innerText = x.description

        // APPEND all the elements to the card
        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);

        // Now APPEND all the cards to the 'showHere' container
        showHere.appendChild(card)
    }); //end loop
} //end function

displayItems(places);