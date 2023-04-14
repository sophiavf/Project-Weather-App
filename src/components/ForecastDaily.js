import format from "date-fns/format";

function getFormattedDate(dateStr) {
	if (dateStr !== undefined) {
		const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
		return format(currentDate, "eeee");
	} else {
		return;
	}
}

function dailyElementList(data) {
	if (data !== undefined) {
		const array = data?.forecast?.forecastday;
		const dayForecasts = array.map((day, index) => (
			<div className="dayContainer" key={index}>
				<div>{getFormattedDate(day?.date_epoch)}</div>
				<img src={day?.day?.condition?.icon} />
				<div>{day?.day?.maxtemp_c}&deg;C</div>
				<div>{day?.day?.mtemp_c}&deg;C</div>
			</div>
		));
		return <div>{dayForecasts}</div>;
	} else {
		return;
	}
}

function ForecastDaily({ forecastData }) {
	return (
		<div className="forecastDaily">
			{forecastData !== undefined ? dailyElementList(forecastData) : <p></p>}
		</div>
	);
}
export default ForecastDaily;
