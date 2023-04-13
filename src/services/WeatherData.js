const apiKey = "06b6a721fa9e44cc9e8172832231004";
const baseUrl = "http://api.weatherapi.com/v1";

//Documentation https://www.weatherapi.com/docs/

async function WeatherData(apiRequest, city, days) {
	const response = await fetch(
		`${baseUrl}${apiRequest}.json?key=${apiKey}&q=${city}{days}`,
		{
			mode: "cors",
		}
	);
	return await response.json();
}

//Current weather
async function currentWeather(city) {
	const data = await WeatherData("/current", city);
	console.log(data);
	return data;
}
//Current details
function currentDetails(city) {
	const data = WeatherData("/current", city);
	return data;
}
//Forecast hourly
function forecastHourly() {}
//Forecast daily
function forecastDaily() {
	const days = 7;
	const data = weatherData("/Forecast", city, `&days=${days}`);
	return data;
}

export { currentWeather, currentDetails, forecastHourly, forecastDaily };
