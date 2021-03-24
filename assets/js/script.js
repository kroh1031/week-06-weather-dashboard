const searchBtn = document.getElementById("search-button");

// Step 1: Get current weather API
function getApi(city) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((currentData) => {
      displayCurrentWeather(currentData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Display current weather info on page
//need to display UV index with color representaion..
function displayCurrentWeather(currentData) {
  let cityName = currentData.name;
  let cityNameEl = document.getElementById("searched-city");
  let currentDate = new Date(currentData.dt * 1000).toLocaleDateString();
  let currentDateEl = document.getElementById("current-date");
  let icon = currentData.weather[0]["icon"];
  let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  let iconEl = document.getElementById("icon-rep");
  iconEl.setAttribute("src", iconUrl);
  let currentTemp = currentData.main["temp"];
  let currentTempEl = document.getElementById("current-temp");
  let currentHumidity = currentData.main["humidity"];
  let currentHumidityEl = document.getElementById("current-humidity");
  let currentWindSpeed = currentData.wind["speed"];
  let currentWindSpeedEl = document.getElementById("current-wind-speed");
  for (let i = 0; i < cityName.length; i++) {
    if (cityName === undefined) {
      return;
    } else {
      cityNameEl.innerText = cityName;
      currentDateEl.innerText = `(${currentDate})`;
      iconEl.innerText = iconEl;
      currentTempEl.innerText = `Temperature: ${currentTemp}°`;
      currentHumidityEl.innerText = `Humidity: ${currentHumidity}%`;
      currentWindSpeedEl.innerText = `Wind Speed: ${currentWindSpeed} mph`;
    }
  }
  getApi2(cityName);
}
// function getUvIndexApi() {}
// Get next 5 day daily forecast API
function getApi2(cityName) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((futureData) => {
      displayFutureWeather(futureData);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Display future weather conditions on page
function displayFutureWeather(futureData) {
  let cityName = futureData.city["name"];
  //first day
  let futureDate1 = new Date(
    futureData.list[5]["dt"] * 1000
  ).toLocaleDateString();
  let futureDateEl1 = document.getElementById("future-date-1");
  let icon1 = futureData.list[5].weather[0].icon;
  let iconUrl1 = `http://openweathermap.org/img/wn/${icon1}.png`;
  let iconEl1 = document.getElementById("icon-rep-1");
  iconEl1.setAttribute("src", iconUrl1);
  let futureTemp1 = futureData.list[5].main["temp"];
  let futureTempEl1 = document.getElementById("future-temp-1");
  let futureHumidity1 = futureData.list[5].main["humidity"];
  let futureHumidityEl1 = document.getElementById("future-humidity-1");
  //second day
  let futureDate2 = new Date(
    futureData.list[13]["dt"] * 1000
  ).toLocaleDateString();
  let futureDateEl2 = document.getElementById("future-date-2");
  let icon2 = futureData.list[13].weather[0].icon;
  let iconUrl2 = `http://openweathermap.org/img/wn/${icon2}.png`;
  let iconEl2 = document.getElementById("icon-rep-2");
  iconEl2.setAttribute("src", iconUrl2);
  let futureTemp2 = futureData.list[13].main["temp"];
  let futureTempEl2 = document.getElementById("future-temp-2");
  let futureHumidity2 = futureData.list[13].main["humidity"];
  let futureHumidityEl2 = document.getElementById("future-humidity-2");
  //third day
  let futureDate3 = new Date(
    futureData.list[21]["dt"] * 1000
  ).toLocaleDateString();
  let futureDateEl3 = document.getElementById("future-date-3");
  let icon3 = futureData.list[21].weather[0].icon;
  let iconUrl3 = `http://openweathermap.org/img/wn/${icon3}.png`;
  let iconEl3 = document.getElementById("icon-rep-3");
  iconEl3.setAttribute("src", iconUrl3);
  let futureTemp3 = futureData.list[21].main["temp"];
  let futureTempEl3 = document.getElementById("future-temp-3");
  let futureHumidity3 = futureData.list[21].main["humidity"];
  let futureHumidityEl3 = document.getElementById("future-humidity-3");
  //fourth day
  let futureDate4 = new Date(
    futureData.list[29]["dt"] * 1000
  ).toLocaleDateString();
  let futureDateEl4 = document.getElementById("future-date-4");
  let icon4 = futureData.list[29].weather[0].icon;
  let iconUrl4 = `http://openweathermap.org/img/wn/${icon4}.png`;
  let iconEl4 = document.getElementById("icon-rep-4");
  iconEl4.setAttribute("src", iconUrl4);
  let futureTemp4 = futureData.list[29].main["temp"];
  let futureTempEl4 = document.getElementById("future-temp-4");
  let futureHumidity4 = futureData.list[29].main["humidity"];
  let futureHumidityEl4 = document.getElementById("future-humidity-4");
  //fifth day
  let futureDate5 = new Date(
    futureData.list[37]["dt"] * 1000
  ).toLocaleDateString();
  let futureDateEl5 = document.getElementById("future-date-5");
  let icon5 = futureData.list[37].weather[0].icon;
  let iconUrl5 = `http://openweathermap.org/img/wn/${icon5}.png`;
  let iconEl5 = document.getElementById("icon-rep-5");
  iconEl5.setAttribute("src", iconUrl5);
  let futureTemp5 = futureData.list[37].main["temp"];
  let futureTempEl5 = document.getElementById("future-temp-5");
  let futureHumidity5 = futureData.list[37].main["humidity"];
  let futureHumidityEl5 = document.getElementById("future-humidity-5");
  for (let i = 0; i < cityName.length; i++) {
    if (cityName === undefined) {
      return;
    } else {
      //appending first day info
      futureDateEl1.innerText = `(${futureDate1})`;
      iconEl1.innerText = iconEl1;
      futureTempEl1.innerText = `Temperature: ${futureTemp1}°`;
      futureHumidityEl1.innerText = `Humidity: ${futureHumidity1}%`;
      //appending second day info
      futureDateEl2.innerText = `(${futureDate2})`;
      iconEl2.innerText = iconEl2;
      futureTempEl2.innerText = `Temperature: ${futureTemp2}°`;
      futureHumidityEl2.innerText = `Humidity: ${futureHumidity2}%`;
      //appending third day info
      futureDateEl3.innerText = `(${futureDate3})`;
      iconEl3.innerText = iconEl3;
      futureTempEl3.innerText = `Temperature: ${futureTemp3}°`;
      futureHumidityEl3.innerText = `Humidity: ${futureHumidity3}%`;
      //appending fourth day info
      futureDateEl4.innerText = `(${futureDate4})`;
      iconEl4.innerText = iconEl4;
      futureTempEl4.innerText = `Temperature: ${futureTemp4}°`;
      futureHumidityEl4.innerText = `Humidity: ${futureHumidity4}%`;
      //appending fifth day info
      futureDateEl5.innerText = `(${futureDate5})`;
      iconEl5.innerText = iconEl5;
      futureTempEl5.innerText = `Temperature: ${futureTemp5}°`;
      futureHumidityEl5.innerText = `Humidity: ${futureHumidity5}%`;
    }
  }
}
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
