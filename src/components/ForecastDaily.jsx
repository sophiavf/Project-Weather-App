import format from "date-fns/format";

import { PhaseContext } from "./contexts/PhaseContext";

function getFormattedDate(dateStr) {
	if (dateStr !== undefined) {
		const currentDate = new Date(dateStr); // To convert from epoch (* 1000)
		return format(currentDate, "eeee");
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

function dailyElementList(data) {
	if (data !== undefined) { // could remove 
		const array = data?.forecast?.forecastday;
		const dayForecasts = array.map((day, index) => (
			<div className="dayContainer carousel-item bg-primary-focus" key={index}>
				<div>{getFormattedDate(day?.date)}</div>
				<img src={day?.day?.condition?.icon} />
				<div>Max {day?.day?.maxtemp_c}&deg;C</div>
				<div>Min {day?.day?.mintemp_c}&deg;C</div>
			</div>
		));
		return <div className="carousel rounded-box bg-primary-content">{dayForecasts}</div>;
	} else {
		return;
	}
}