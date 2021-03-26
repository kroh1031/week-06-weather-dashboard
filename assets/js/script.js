const searchBtn = document.getElementById("search-button");

// Get current weather API
function getApi(city) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((currentData) => {
      console.log(currentData);
      displayCurrentWeather(currentData);
      getUviApi(currentData.coord.lat, currentData.coord.lon);
    })
    .catch((err) => {
      console.log(err);
    });
}
//Get UV Index API
function getUviApi(lat, lon) {
  let apiKey = "0ae0fe7cc5a483cdff07255ca0a1a19f";
  let requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((currentData) => {
      displayUvi(currentData);
    })
    .catch((err) => {
      console.log(err);
    });
}
// Display UV Index
function displayUvi(currentData) {
  let uvi = parseFloat(currentData.current["uvi"]);

  let uvColorNumber;
  let uviEl = document.getElementById("current-uvi");
  if (uvi <= 2) {
    uvColorNumber = "green";
  } else if (uvi > 2 && uvi <= 5) {
    uvColorNumber = "yellow";
  } else if (uvi > 5 && uvi <= 7) {
    //you had <=7 and the next if statement checked for a number >=8, where is 7-8?
    uvColorNumber = "orange";
  } else if (uvi > 7 && uvi <= 10) {
    uvColorNumber = "red";
  } else {
    uvColorNumber = "violet";
  }

  uviEl.innerHTML = `UV Index: <button class="btn" style="background-color:${uvColorNumber}">${uvi}</button>`;
}

// Display current weather info on page
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
      currentTempEl.innerText = `Temperature: ${currentTemp}°F`;
      currentHumidityEl.innerText = `Humidity: ${currentHumidity}%`;
      currentWindSpeedEl.innerText = `Wind Speed: ${currentWindSpeed} mph`;
    }
  }
  getApi2(cityName);
}

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
      futureTempEl1.innerText = `Temperature: ${futureTemp1}°F`;
      futureHumidityEl1.innerText = `Humidity: ${futureHumidity1}%`;
      //appending second day info
      futureDateEl2.innerText = `(${futureDate2})`;
      iconEl2.innerText = iconEl2;
      futureTempEl2.innerText = `Temperature: ${futureTemp2}°F`;
      futureHumidityEl2.innerText = `Humidity: ${futureHumidity2}%`;
      //appending third day info
      futureDateEl3.innerText = `(${futureDate3})`;
      iconEl3.innerText = iconEl3;
      futureTempEl3.innerText = `Temperature: ${futureTemp3}°F`;
      futureHumidityEl3.innerText = `Humidity: ${futureHumidity3}%`;
      //appending fourth day info
      futureDateEl4.innerText = `(${futureDate4})`;
      iconEl4.innerText = iconEl4;
      futureTempEl4.innerText = `Temperature: ${futureTemp4}°F`;
      futureHumidityEl4.innerText = `Humidity: ${futureHumidity4}%`;
      //appending fifth day info
      futureDateEl5.innerText = `(${futureDate5})`;
      iconEl5.innerText = iconEl5;
      futureTempEl5.innerText = `Temperature: ${futureTemp5}°F`;
      futureHumidityEl5.innerText = `Humidity: ${futureHumidity5}%`;
    }
  }
}

// Save items to local storage
function saveLastCity(city) {
  console.log(city);

  //cities = ["Atlanta", "Phoenix", "Chicago"]
  //get("cities")
  //city = {"city", Atlanta}
  // atlanta = {"atlanta", atlanta}
  //getItem("atlanta")?
  var cities = JSON.parse(localStorage.getItem("cities"));

  if (cities == null) {
    cities = [];
  }
  cities.push(city);
  console.log(city[0].toUpperCase());
  localStorage.setItem("cities", JSON.stringify(cities));

  let list = document.getElementById("saved-city-1");
  var listItem = document.createElement(`button`);
  listItem.textContent = city;
  list.append(listItem);
}
function init() {
  // When the init function is executed, the code inside getItemsFromStorage function will also execute
  getItemsFromStorage();
}
init();
function getItemsFromStorage() {
  let savedCity = JSON.parse(localStorage.getItem("cities"));
  let list = document.getElementById("saved-city-1");

  savedCity.forEach((city) => {
    var listItem = document.createElement(`button`);
    listItem.textContent = city;
    list.append(listItem);
  });
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let city = document.getElementById("city-name").value;
  getApi(city);
  saveLastCity(city);
});

const savedCityEl = document.getElementById("saved-city-1");
savedCityEl.addEventListener("click", function (event) {
  event.preventDefault();
  var city = event.target.textContent;
  getApi(city);
});
