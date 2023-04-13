import { useState } from "react";
import ForecastDaily from "./ForecastDaily";
import ForecastHourly from "./ForecastHourly";

//Toggles between hourly and daily forecast
function ForecastDisplay({ chosenCity }) {
	const [display, setDisplay] = useState("daily");

	function changeForecastDisplay() {
		setDisplay(display === "hourly" ? "daily" : "hourly");
	}

	return (
		<div className="forecastDisplay">
			<button onClick={changeForecastDisplay}></button>
			<div className="forecastContainer">
				{display === "hourly" ? <ForecastHourly chosenCity={chosenCity}/> : <ForecastDaily chosenCity={chosenCity}/>}
			</div>
		</div>
	);
}

export default ForecastDisplay;
