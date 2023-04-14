import { useState, useEffect } from "react";
import { forecast } from "../services/WeatherData";

import ForecastHourly from "./ForecastHourly";
import ForecastDaily from "./ForecastDaily";

//Toggles between hourly and daily forecast
function ForecastDisplay({ chosenCity }) {
	const [display, setDisplay] = useState("hourly");
	const [data, setData] = useState();

	//Gets forecast data required for child modules
	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const data = await forecast(chosenCity);
			// set state with the result
			setData(data);
		};
		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
		chosenCity = chosenCity;
	}, [chosenCity]);

	//Toggles display state
	function changeForecastDisplay() {
		setDisplay(display === "hourly" ? "daily" : "hourly");
	}

	return (
		<div className="forecastDisplay">
			{display === "hourly" ? (
				<button onClick={changeForecastDisplay} className="toggleButton">
					<b>Hourly</b> / Daily
				</button>
			) : (
				<button onClick={changeForecastDisplay} className="toggleButton">
					Hourly / <b>Daily</b>
				</button>
			)}
			<div className="forecastContainer">
				{display === "hourly" ? (
					<ForecastHourly forecastData={data} />
				) : (
					<ForecastDaily forecastData={data} />
				)}
			</div>
		</div>
	);
}

export default ForecastDisplay;
