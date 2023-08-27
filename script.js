const searchBtn = document.getElementById("searchBtn");
const cityNameEl = document.getElementById("cityName");
const weatherIconEl = document.getElementById("weatherIcon");
const temperatureEl = document.getElementById("temperature");
const descriptionEl = document.getElementById("description");

searchBtn.addEventListener("click", async () => {
  const cityInput = document.getElementById("cityInput").value;
  if (cityInput) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      cityNameEl.textContent = data.name;
      weatherIconEl.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
      temperatureEl.textContent = `${data.main.temp}°C`;
      descriptionEl.textContent = data.weather[0].description;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
});
