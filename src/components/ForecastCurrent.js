import { currentWeather } from "../services/WeatherData";

function ForecastCurrent(setChosenCity) {
	currentWeather(setChosenCity);

	return <div></div>;
}

export default ForecastCurrent;
