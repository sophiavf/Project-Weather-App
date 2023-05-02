import format from "date-fns/format";

function getFormattedDate(dateStr, element) {
	const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
	if (dateStr !== undefined && element) {
		return format(currentDate, "p");
	} else {
		return currentDate;
	}
}

function ForecastHourly({ forecastData }) {
	return (
		<div className="forecastHourly">
			{forecastData !== undefined ? hourlyElementList(forecastData) : <p></p>}
		</div>
	);
}

export default ForecastHourly;

//Receives data from the API service and renders it
function hourlyElementList(data) {
	
	if (data !== undefined) { // could remove 
		const currentLocalTime = getFormattedDate(data?.location?.localtime_epoch); 
		// Gets only the data 
		const array = data?.forecast?.forecastday?.[0]?.hour;

		const filtered = array.filter(
			(hour) => getFormattedDate(hour.time_epoch, false) >= currentLocalTime
		);
		const hourlyForecast = filtered.map((hour, index) => (
			<div className="hourContainer" key={index}>
				<div className="hourlyTime">
					{getFormattedDate(hour?.time_epoch, true)}
				</div>
				<img src={hour?.condition?.icon} />
				<div>{hour?.temp_c}&deg;C</div>
			</div>
		));
		return <div>{hourlyForecast}</div>;
	}
	return;
}