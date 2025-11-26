// Weather data powered by the service from :contentReference[oaicite:0]{index=0}.

const apiKey = "7a3cafbca58de149fbb8802ca7b5df53";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/cloudy.png";
    }


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "image/sun.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "image/mist.png";
    }
}
document.querySelector(".weather").style.display = "block";

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


