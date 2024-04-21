# SunSpot Weather App

SunSpot is a simple weather application that provides current weather information for any city in the world.

## Features

- Search for a city to get current weather information.
- Displays the city name, temperature, weather condition, minimum and maximum temperature, and wind speed.
- Weather conditions are represented by corresponding icons.

## How it Works

The application uses the OpenWeatherMap API to fetch the weather data. It then parses the data and displays it in a user-friendly format.

## Code Structure

- The main JavaScript file is `weather.js` which contains the logic for fetching and displaying the weather data. It uses the fetch API to get the data from OpenWeatherMap.
- The weather icons are represented by a mapping of weather condition codes to icon file names in the `iconsList` object.
- The `dataFetch` function is responsible for making the API request and handling the response. It uses the `displayWeather` function to update the UI with the new weather data.
- The HTML structure of the application is defined in `index.html`. It includes a search form for the city and placeholders for the weather information.

## Usage

To use the application, simply enter the name of a city in the search box and press the "Search" button. The weather information for that city will then be displayed.

## Note

To use the weather app, follow these steps:

1. Create an `apikey.js` file in the root directory of your project.
2. Inside the `apikey.js` file, create a constant named `apiKey` and store your OpenWeather API key as a string value. For example:

```javascript
const apiKey = 'YOUR_API_KEY';

## License

This project is open source and available under the MIT License.
```
