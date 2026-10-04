const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");

const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const weatherEmoji = document.getElementById("weatherEmoji");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");

const message = document.getElementById("message");
async function getWeather(city) {

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    try {

        message.textContent = "Loading weather...";


        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);

        if (!geoResponse.ok) {
            throw new Error("Unable to find city");
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found");
        }


        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,pressure_msl,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Weather data unavailable");
        }

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;


        cityName.textContent = location.name;

        countryName.textContent =
            location.country || "Unknown";


        temperature.textContent =
            Math.round(current.temperature_2m);


        feelsLike.textContent =
            `${Math.round(current.apparent_temperature)}°C`;


        humidity.textContent =
            `${current.relative_humidity_2m}%`;


        windSpeed.textContent =
            `${current.wind_speed_10m} km/h`;


        pressure.textContent =
            `${Math.round(current.pressure_msl)} hPa`;


        const weatherInfo =
            getWeatherCondition(current.weather_code);


        weatherCondition.textContent =
            weatherInfo.text;

        weatherEmoji.textContent =
            weatherInfo.emoji;


        message.textContent =
            `Weather updated for ${location.name}`;


    } catch (error) {

        console.error(error);

        message.textContent =
            "City not found. Please try another city.";

    }
}

function getWeatherCondition(code) {

    if (code === 0) {

        return {
            text: "Clear Sky",
            emoji: "☀️"
        };

    }


    if (code === 1 || code === 2) {

        return {
            text: "Partly Cloudy",
            emoji: "🌤️"
        };

    }


    if (code === 3) {

        return {
            text: "Overcast",
            emoji: "☁️"
        };

    }


    if (
        code === 45 ||
        code === 48
    ) {

        return {
            text: "Foggy",
            emoji: "🌫️"
        };

    }


    if (
        code >= 51 &&
        code <= 57
    ) {

        return {
            text: "Drizzle",
            emoji: "🌦️"
        };

    }


    if (
        code >= 61 &&
        code <= 67
    ) {

        return {
            text: "Rain",
            emoji: "🌧️"
        };

    }


    if (
        code >= 71 &&
        code <= 77
    ) {

        return {
            text: "Snow",
            emoji: "❄️"
        };

    }


    if (
        code >= 80 &&
        code <= 82
    ) {

        return {
            text: "Rain Showers",
            emoji: "🌦️"
        };

    }


    if (
        code === 95 ||
        code === 96 ||
        code === 99
    ) {

        return {
            text: "Thunderstorm",
            emoji: "⛈️"
        };

    }


    return {
        text: "Unknown",
        emoji: "🌤️"
    };

}


searchBtn.addEventListener("click", function () {

    const city = cityInput.value.trim();

    getWeather(city);

});

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        getWeather(cityInput.value.trim());

    }

});
getWeather("Chandigarh");