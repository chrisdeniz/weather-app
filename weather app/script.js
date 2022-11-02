
const getWeatherData = (city) => {
return fetch(`http://api.weatherapi.com/v1/current.json?key=549da106dbb24b7b8bc183443222909&q=${city}&aqi=no`)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err)); 
}
const searchCity = async () => {
   const city = document.getElementById('city-input').value;
   const data = await getWeatherData(city)
   showWeatherData(data)
}
const showWeatherData = (weatherData) => {
  const city = document.getElementById('city-input').value;
  document.getElementById('city-name').innerText = weatherData.location.name
  document.getElementById('temp').innerText = weatherData.current.temp_c
  document.getElementById('weather-type').innerText = weatherData.current.condition.text
}