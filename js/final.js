import weather from "./weather.js";
import city from "./city.js";

const city = new city(localStorage("cityName"));
const weather = new weather();

//App Launch
document.addEventListener("readystatechange", (event) => {
    if (event.target.readystate === "complete") {
        initApp();
    }
});

const fetchCityWeather = async (name) => {
    try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=682a8aa45afb0c134bf997fe504eacd2&units=imperial";
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

function initApp()
{
    displayCurrentTemp();
    displayHighTemp();
    displayLowTemp();
    displayWindSpeed();
    displayHumidity();
    setWeather(city.getCity());
}

function displayCurrentTemp()
{
    const currentTemp = document.createElement("label");
    currentTemp.className = "currentTemp";
    currentTemp.tabIndex = 0;
    currentTemp.textContent = weather.getCurrentTemp();
}

function displayHighTemp()
{
    const high = document.createElement("label");
    high.className = "highTemp";
    high.tabIndex = 0;
    high.textContent = weather.getHigh();
}

function displayLowTemp()
{
    const low = document.createElement("label");
    low.className = "lowTemp";
    low.tabIndex = 0;
    low.textContent = weather.getLow();
}

function displayWindSpeed()
{
    const wind = document.createElement("label");
    wind.className = "WindSpeed";
    wind.tabIndex = 0;
    wind.textContent = weather.getWindSpeed();
}

function displayHumidity()
{
    const hum = document.createElement("label")
    hum.className = "humidity";
    hum.tabIndex = 0;
    hum.textContent = weather.getHumidity();
}

function getData()
{
    localStorage.setItem("cityName", document.getElementById("searchbox").textContent);
}

document.getElementById("search-button").addEventListener("click" , (event) => {

    const json = fetchCityWeather(document.getElementById("searchbox").textContent);
    weather.setCurrentTemp(json.main.temp);
    weather.setHigh(json.main.temp_max);
    weather.setLow(json.main.temp_min);
    weather.setHumidity(json.main.humidity);
    weather.setWindSpeed(json.wind.speed);
    const box = document.getElementById("searchbox");
    box.textContent = "";


});