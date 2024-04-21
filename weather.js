import {
  locationSearch,
  weatherIcon,
  cityName,
  weatherDegrees,
  weatherName,
  minMax,
  windSpeed,
} from "./elements";

import apiKey from "./apikey";

const iconsList = {
  200: "thunderstorm.png",
  201: "thunderstorm.png",
  202: "thunderstorm.png",
  210: "thunderstorm.png",
  211: "thunderstorm.png",
  212: "thunderstorm.png",
  221: "thunderstorm.png",
  230: "thunderstorm.png",
  231: "thunderstorm.png",
  232: "thunderstorm.png",

  300: "rain.png",
  301: "rain.png",
  302: "rain.png",
  310: "rain.png",
  311: "rain.png",
  312: "rain.png",
  313: "rain.png",
  314: "rain.png",
  321: "rain.png",

  500: "rain.png",
  501: "rain.png",
  502: "rain.png",
  503: "rain.png",
  504: "rain.png",
  511: "rain.png",
  520: "rain.png",
  521: "rain.png",
  522: "rain.png",
  531: "rain.png",

  600: "snow.png",
  601: "snow.png",
  602: "snow.png",
  611: "snow.png",
  612: "snow.png",
  613: "snow.png",
  615: "snow.png",
  616: "snow.png",
  620: "snow.png",
  621: "snow.png",
  622: "snow.png",

  701: "mist.png",
  711: "mist.png",
  721: "mist.png",
  731: "mist.png",
  741: "mist.png",
  751: "mist.png",
  761: "mist.png",
  762: "mist.png",
  771: "mist.png",
  781: "mist.png",

  800: "sunny.png",

  801: "fewclouds.png",
  802: "cloudy.png",
  803: "cloudy.png",
  804: "cloudy.png",
};

export const dataFetch = async () => {
  const city = locationSearch.value;
  if (city !== "") {
    locationSearch.value = "";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error("Error:", error);
      displayCityNotFound(error);
    }
  }
};

const displayWeather = (data) => {
  const { name, main, weather, wind } = data;
  weatherIcon.classList.add("weather-icon");
  weatherIcon.src = `${iconsList[weather[0].id]}`;
  cityName.textContent = `${name}, ${data.sys.country}`;
  weatherDegrees.textContent = `${parseInt(main.temp)}°C`;
  weatherName.textContent = weather[0].main;
  minMax.textContent = ` ${parseInt(main.temp_max)}° / ${parseInt(
    main.temp_min
  )}° Feels like ${parseInt(main.feels_like)}°`;
  windSpeed.textContent = `\uD83D\uDCA8 Wind speed: ${Math.round(
    wind.speed * 3.6
  )} km/h`;
};

const displayCityNotFound = () => {
  cityName.textContent = "City not found";
  weatherDegrees.textContent = "";
  weatherName.textContent = "";
  minMax.textContent = "";
  windSpeed.textContent = "";
  weatherIcon.classList.add("weather-icon");
  weatherIcon.src = "404.png";
};
