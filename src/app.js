
function formatDate(time) {
    let date = new Date(time);
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
    let day = days[date.getDay()];
    let currentDate = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
    hours = `0${hours}`;
    }
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }
    return `${day}, ${currentDate}, ${hours}:${minutes}`;
}

function displayTemperature(responce) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let countryElement = document.querySelector("#country");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    temperatureElement.innerHTML = Math.round(responce.data.temperature.current);
    cityElement.innerHTML = (responce.data.city);
    countryElement.innerHTML = (responce.data.country);
    descriptionElement.innerHTML = (responce.data.condition.description);
    humidityElement.innerHTML = (responce.data.temperature.humidity);
    windElement.innerHTML = Math.round(responce.data.wind.speed);
    dateElement.innerHTML = formatDate(responce.data.time * 1000);
}

let apiKey = "f60o31cb1at3bc83d7c4d07b447cfe84";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${"Tokyo"}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);