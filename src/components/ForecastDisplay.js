import Button from "./Button";

//Toggles between hourly and daily forecast
export default function ForecastDisplay() {
	this.state = {
		display: "hourly",
	};

	function changeForecastDisplay() {
		let { display } = this.state;
		this.setState({ display: display === "hourly" ? "daily" : "hourly" });
	}

	function renderForecast() {
		let { display } = this.state;
		if (display === "hourly") {
			//return hourly component
		} else {
			//return daily component
		}
	}

	return (
		<div class="forecastDisplay">
			<Button
				buttonText={"Hourly / Daily"}
				buttonClass={toggleHourlyDaily}
				onClick={changeForecastDisplay}
			/>
		</div>
	);
}
