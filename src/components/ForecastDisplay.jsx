import { useState, useEffect, useContext } from "react";
import { PhaseContext } from "./contexts/PhaseContext";
import { CityContext } from "./contexts/CityContext";

import ForecastHourly from "./ForecastHourly";
import ForecastDaily from "./ForecastDaily";

//Toggles between hourly and daily forecast
function ForecastDisplay() {
	const [display, setDisplay] = useState("hourly");
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	//Context
	const { phase, imageUrl, locationTime, setLocationTime } =
		useContext(PhaseContext);
	const { city, setCity } = useContext(CityContext);

	//Gets forecast data required for child modules
	// declare the async data fetching function
	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			try {
				const days = 3;
				const response = await fetch(
					`http://localhost:8000/weather/${city}/forecast/${days}`
				);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		// call the function, but only if city is not undefined
		if (city) {
			fetchData();
		}
	}, [city]);

	//Toggles display state
	function changeForecastDisplay() {
		setDisplay(display === "hourly" ? "daily" : "hourly");
	}

	return (
		<div className="forecastDisplay">
			{/* Button */}
			{display === "hourly" ? (
				<button onClick={changeForecastDisplay} className="toggleButton">
					<b>Hourly</b> / Daily
				</button>
			) : (
				<button onClick={changeForecastDisplay} className="toggleButton">
					Hourly / <b>Daily</b>
				</button>
			)}
			{isLoading ? (
				<p>Loading</p>
			) : (
				<div className="forecastContainer">
					{display === "hourly" ? (
						<ForecastHourly forecastData={data} />
					) : (
						<ForecastDaily forecastData={data} />
					)}
				</div>
			)}
		</div>
	);
}

export default ForecastDisplay;
