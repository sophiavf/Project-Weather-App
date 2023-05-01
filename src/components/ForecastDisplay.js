import { useState, useEffect, useContext } from "react";

import { PhaseContext } from "./PhaseProvider";

import ForecastHourly from "./ForecastHourly";
import ForecastDaily from "./ForecastDaily";

//Toggles between hourly and daily forecast
function ForecastDisplay({ chosenCity }) {
	const [display, setDisplay] = useState("hourly");
	const [data, setData] = useState();

	const { phase, imageUrl } = useContext(PhaseContext);

	//Gets forecast data required for child modules
	// declare the async data fetching function
	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			
			// get the data from the api
			try {
				const days = 3;
				const response = await fetch(
					`http://localhost:8000/weather/${chosenCity}/forecast/${days}`
				);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};
		// call the function
		fetchData();
	}, [chosenCity]);

	//Toggles display state
	function changeForecastDisplay() {
		setDisplay(display === "hourly" ? "daily" : "hourly");
	}

	return (
		<div
			className="forecastDisplay"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
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
