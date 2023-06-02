const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "414d253586mshccb42d7877c4995p1a97c3jsn4cc27f35856b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
// converts the first letter of the city name to uppercase
function uppercase(city) {
  var p1 = city.slice(0, 1).toUpperCase();
  var p2 = city.slice(1, city.length).toLowerCase();
  city = p1 + p2;
  return city;
}
const getWeather = (city) => {
  cityName.innerHTML = uppercase(city);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
