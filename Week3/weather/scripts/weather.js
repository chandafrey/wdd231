
// SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myTemperatureMax = document.querySelector('#temperatureMax');
const myTemperatureMin = document.querySelector('#temperatureMin');
const myGraphic = document.querySelector('#graphic');
const myForecast = document.querySelector('#forecast');

// CREATE REQUIRED VARIABLES FOR THE URL 
const myKey = "c54262e4222924082abfef4cb9d70994"
// const myLat =  "49.752578566348625"
// const myLong = "6.642495011451834"
const myLat =  "40.32027086055844" 
const myLong = "-112.02095562570254"

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
// Create a const for current and one for forcast
// const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
const currentURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

// TRY TO GRAB THE CURRENT WEATHER DATA 
async function apiFetch() {
  try {
    // Fetch both urls at the same time
    // const response = await fetch(myURL);
    const [currentResponse, forecastResponse] = await Promise.all([
        fetch(currentURL),
        fetch(forecastURL)
    ]);

    // if (response.ok) {
    if (currentResponse.ok && forecastResponse.ok) {
        // Convert both urls to json
        // const data = await response.json();
        const [currentData, forecastData] = await Promise.all([
            currentResponse.json(),
            forecastResponse.json()
        ]);

        // For testing only...go to DevTools and console to see if
        // there is an object loaded(nothing will show on web page yet)
        // console.log(data); // testing only;
        console.log("Current Weather", currentData)
        console.log("Forecast", forecastData);

        // Call FUNCTIONS(still need to write below) here to DISPLAY the results on the page
        // UNCOMMENT when ready
        // displayResults(data); 
        displayCurrentWeather(currentData);
        displayForecast(forecastData);

    } else {
        // throw Error(await response.text());
        throw new Error("One of the API calls failed");
    }
  } catch (error) {
      console.log(error);
  }
}

// FUNCTIONS TO DISPLAY THE JSON DATA ONTO MY WEB PAGE

// function displayResults(data) {
function displayCurrentWeather(data) {

    console.log('hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    // add "Math.round" and then put in () the location of the element
    // so they temperature will show as whole numbers, not decimals
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`
    myTemperatureMax.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;`
    myTemperatureMin.innerHTML = `Low:  ${Math.round(data.main.temp_min)}&deg;`

    // create a "src" for the html image icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}

function displayForecast(data) {
    // Get today's date so we can find the next 3 days
    const today = new Date();

    // Filter forecast to include one reading per day near 12:00:00
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    // Take just the next 3 days
    const threeDayForecast = dailyForecasts.slice(0, 3);
    threeDayForecast.forEach(day => {
        const date = new Date(day.dt_txt);

    // Create an element for each day's forecast
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("forecast-day");

  
    dayDiv.innerHTML = `
        <strong>${date.toLocaleDateString("en-US", { weekday: "short" })}</strong><br>
        ${Math.round(day.main.temp)}°F<br>
        ${day.weather[0].description}
    `   ;

    myForecast.appendChild(dayDiv);

    });

}
// START THE PROCESS
apiFetch();