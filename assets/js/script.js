const searchBtn = document.getElementById("search-button");
const weatherContainerEl = document.getElementById("weather-container");
// Step 1: Get current weather API for any city
function getApi(city) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((currentData) => {
      displayCurrentWeather(currentData);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Step 2: Display current weather info on page
//need to display icon..
function displayCurrentWeather(weatherInfo) {
  let cityName = weatherInfo.name;
  let cityNameEl = document.getElementById("searched-city");
  let currentDate = new Date(weatherInfo.dt * 1000).toLocaleDateString();
  let currentDateEl = document.getElementById("current-date");
  let icon = weatherInfo.weather[0]["icon"];
  let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  let iconEl = document.getElementById("icon-rep");
  iconEl.setAttribute("src", iconUrl);

  for (let i = 0; i < cityName.length; i++) {
    if (cityName === undefined) {
      return;
    } else {
      cityNameEl.innerText = cityName;
      currentDateEl.innerText = `(${currentDate})`;
      iconEl.innerText = iconEl;
    }
  }
  getApi2(cityName);
}
// Get next 5 day daily forecast API
function getApi2(cityName) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=5&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((futureData) => {
      //   displayFutureWeather(data);
      console.log(futureData);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Display future weather conditions on page
function displayFutureWeather() {}
// working api: 'api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=0ae0fe7cc5a483cdff07255ca0a1a19f'

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
searchBtn.addEventListener("click", function () {
  let city = document.getElementById("city-name").value;
  getApi(city);
});
