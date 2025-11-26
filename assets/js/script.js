// Weather data powered by the service from :contentReference[oaicite:0]{index=0}.
 const apiKey = "7a3cafbca58de149fbb8802ca7b5df53";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector("#cityInput");
        const searchBtn = document.querySelector("#searchButton");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            if (data.cod == "404") {
                alert("City not found ❌");
                document.querySelector(".weather").style.display = "none";
                return;
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

            // Convert m/s → km/h
            const speedKmh = Math.round(data.wind.speed * 3.6);
            document.querySelector(".wind").innerHTML = speedKmh + " km/h";

            const weatherMain = data.weather[0].main;

            if (weatherMain == "Clouds") {
                weatherIcon.src = "assets/image/cloudy.png";
            } else if (weatherMain == "Clear") {
                weatherIcon.src = "assets/image/sun.png";
            } else if (weatherMain == "Rain") {
                weatherIcon.src = "assets/image/rain.png";
            } else if (weatherMain == "Drizzle") {
                weatherIcon.src = "assets/image/drizzle.png";
            } else if (weatherMain == "Mist") {
                weatherIcon.src = "assets/image/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
        }

        // Button click event
        searchBtn.addEventListener("click", () => {
            if (searchBox.value.trim() != "")
                checkWeather(searchBox.value);
        });

        // Enter key event
        searchBox.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && searchBox.value.trim() != "") {
                checkWeather(searchBox.value);
            }
        });


