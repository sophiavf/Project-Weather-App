const apiKey = "06b6a721fa9e44cc9e8172832231004";
const baseUrl = "https://api.weatherapi.com/v1";

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
	return data;
}
//Forecast
async function forecast(city) {
	const days = 3; 
	const data = await WeatherData("/forecast", city, `&days=${days}`);
	return data;
}

export { currentWeather, forecast };
