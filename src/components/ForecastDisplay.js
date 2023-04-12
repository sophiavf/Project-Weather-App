import ForecastDaily from "./ForecastDaily";
import ForecastHourly from "./ForecastHourly";


function Display({})

//Toggles between hourly and daily forecast
function ForecastDisplay() {
	const [display, setDisplay] = useState("hourly");

	function changeForecastDisplay() {
		setDisplay(display === "hourly" ? "daily" : "hourly");
	}

	return (
		<div class="forecastDisplay">
			<button onClick={changeForecastDisplay}></button>
			<div className="forecastContainer">{
				display ==="hourly" ? <ForecastHourly /> : <ForecastDaily/>
			}</div>
		</div>
	);
}

export default ForecastDisplay;
