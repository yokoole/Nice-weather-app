function displayTemperature(responce) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let countryElement = document.querySelector("#country");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(responce.data.temperature.current);
    cityElement.innerHTML = (responce.data.city);
    countryElement.innerHTML = (responce.data.country);
    descriptionElement.innerHTML = (responce.data.condition.description);
    humidityElement.innerHTML = (responce.data.temperature.humidity);
    windElement.innerHTML = Math.round(responce.data.wind.speed);
}

let apiKey = "f60o31cb1at3bc83d7c4d07b447cfe84";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${"Kyiv"}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
