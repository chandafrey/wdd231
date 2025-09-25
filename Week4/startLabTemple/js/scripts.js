// open the data temples.js file...
// add "export const" to the first line so it looks like this:
// export const temples = [
// Next come to this file...
// add -  import {temples} from '../data/temples.js'
import {temples} from '../data/temples.js'
// Then log it to the console like this and make sure it shows up
// There should be an array of 30 items in the console on DevTools
// console.log(temples)


// Next go back to the temples.js file...
// add this line so we can get the url
// You will need to add it above the export const temples = [ line
// export const url = "//https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/"
// Next come to this file...
// add -  import {temples} from '../data/temples.js'
import {url} from '../data/temples.js'
// Then log it to the console like this and make sure it shows up
// There should be a https://link on DevTools
// console.log(temples)

// --------------------
// we need querySelectors for displaying the pictures
const showHere = document.querySelector("#showHere")
// we need querySelectors for displaying the dialog box
const mydialog = document.querySelector("#mydialog")

// we need querySelectors for displaying the title
// reference the child element of "mydialog" with a 
// a space and the name of the child like this:
// ("#mydialog h2")
const mytitle = document.querySelector("#mydialog h2")
// we need querySelectors for displaying the temple information
const myinfo = document.querySelector("#mydialog p")
// we need querySelectors for displaying the close button
const myclose = document.querySelector("#mydialog button")

// Add a single close event listener
myclose.addEventListener("click", () => mydialog.close())

// LOOP through the array of json temple items
function displayItems(data) {
// make sure it works using the console from devtools to displaying
    console.log(data)
    // use a forEach loop and name the item "x" 
    data.forEach(x => {
    console.log(x)
    // Now create an img element named "photo"
    const photo = document.createElement('img')
    // Add the src and alt info
    photo.src = `${url}${x.path}`
    photo.alt = x.name
    
    // Add an event listener to each division on the page
    photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo)
    })

}

// Start displaying all items in the json file
displayItems(temples)

// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`

}