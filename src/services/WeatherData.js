const apiKey = "06b6a721fa9e44cc9e8172832231004";
const baseUrl = "http://api.weatherapi.com/v1";

//Documentation https://www.weatherapi.com/docs/

async function WeatherData(apiRequest, city, days) {
	const response = await fetch(
		`${baseUrl}${apiRequest}?key=${apiKey}&q=${city}days=${days}`,
		{
			mode: "cors",
		}
	);
	const weatherData = await response.json();
	return weatherData;
}

export default WeatherData;

//Current weather

function currentWeather(city) {
	const data = WeatherData('/current.', city); 
}
//Current details
function currentDetails(city) {
	const data = WeatherData('/current.', city); 
}
//Forecast hourly
function forecastHourly() {}
//Forecast daily
function forecastDaily() {
	const days = 7; 

}

export { currentWeather };
