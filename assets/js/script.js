const searchBtn = document.getElementById("search-button");
const weatherContainerEl = document.getElementById("weather-container");
// Step 1: Get current weather API for any city
function getApi() {
  let city = document.getElementById("city-name").value;
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      displayWeather(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Step 2: Display data on page
function displayWeather(weatherInfo) {
  console.log(weatherInfo.name);
  let cityName = weatherInfo.name;
  let cityInfo = document.createElement("div");
  cityInfo.innerHTML = `
  <h1>${cityName}</h1>`;
  weatherContainerEl.append(cityInfo);
}
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
searchBtn.addEventListener("click", getApi);
