import format from "date-fns/format";

function getFormattedDate(dateStr) {
	if (dateStr !== undefined) {
		const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
		return format(currentDate, "p");
	} else {
		return;
	}
}

//Receives data from the API service and renders it
function hourlyElementList(data) {
	if (data !== undefined) {
		const array = data?.forecast?.forecastday?.[0]?.hour;
		const hourlyForecast = array.map((hour, index) => (
			<div className="hourContainer" key={index}>
				<div className="hourlyTime">{getFormattedDate(hour?.time_epoch)}</div>
				<img src={hour?.condition?.icon} />
				<div>{hour?.temp_c}&deg;C</div>
			</div>
		));
		return <div>{hourlyForecast}</div>;
	}

	return;
}

function ForecastHourly({ forecastData }) {
	return (
		<div className="forecastHourly">
			{forecastData !== undefined ? hourlyElementList(forecastData) : <p></p>}
		</div>
	);
}

export default ForecastHourly;
