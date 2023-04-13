import { forecastDaily } from "../services/WeatherData";
import React, { useEffect, useState } from "react";
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

function ForecastDaily({ chosenCity }) {
	const [data, setData] = useState();

	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const data = await forecastDaily(chosenCity);
			// set state with the result
			setData(data);
		};
		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
		chosenCity = chosenCity;
	}, [chosenCity]);
	return (
		<div className="forecastDaily">
			{data !== undefined ? dailyElementList(data) : <p></p>}
		</div>
	);
}
export default ForecastDaily;
