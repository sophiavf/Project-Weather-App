const apiKey = "06b6a721fa9e44cc9e8172832231004";
const baseUrl = "http://api.weatherapi.com/v1";

//Documentation https://www.weatherapi.com/docs/

async function WeatherData(apiRequest, city, days) {
	const response = await fetch(
		`${baseUrl}${apiRequest}.json?key=${apiKey}&q=${city}${days}`,
		{
			mode: "cors",
		}
	);
	return await response.json();
}

//Current weather
async function currentWeather(city) {
	const data = await WeatherData("/current", city, "");
	console.log(data);
	return data;
}
//Forecast hourly
function forecastHourly() {}
//Forecast daily
async function forecastDaily(city) {
	const days = 7;
	const data = await WeatherData("/forecast", city, `&days=${days}`);
	console.log(data);
	return data;
}

export { currentWeather, forecastHourly, forecastDaily };
