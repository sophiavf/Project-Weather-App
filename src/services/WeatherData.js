const apiKey = "06b6a721fa9e44cc9e8172832231004";
const baseUrl = "http://api.weatherapi.com/v1";

async function WeatherData(apiRequest, city) {
	const response = await fetch(
		`${baseUrl}${apiRequest}?key=${apiKey}&q=${city}`,
		{
			mode: "cors",
		}
	);
	const weatherData = await response.json();
	return weatherData;
}

export default WeatherData;
