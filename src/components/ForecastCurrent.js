import { currentWeather } from "../services/WeatherData";
import React, { useEffect, useState } from "react";
import format from "date-fns/format";

const getFormattedDate = (dateStr) => {
	if (dateStr !== undefined) {
		const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
		return format(currentDate, "eeee, Mo MMM YYY, p");
	} else {
		return;
	}
};

function ForecastCurrent({ setChosenCity }) {
	const [data, setData] = useState();
	const [imperialMetric, setImperialMetric] = useState("metric");

	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const data = await currentWeather(setChosenCity);
			// set state with the result
			setData(data);
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	// const data = currentWeather(setChosenCity);

	return (
		<div className="forecastCurrent">
			<div className="currentWeather">
				<img src={data?.current?.condition?.icon} />
				<div className="temp">{data?.current?.temp_c}&deg;C</div>
				<div>{data?.current?.condition?.text}</div>
				<div>{data?.location?.name}</div>
				<div>{getFormattedDate(data?.location?.localtime_epoch)}</div>
			</div>
			<div className="details">
				<div className="detailIconName">
					<span className="material-symbols-outlined">device_thermostat</span>
					<p>Feels like</p>
				</div>
				<div>{data?.current?.feelslike_c}&deg;C</div>
				<div className="detailIconName">
					<span className="material-symbols-outlined">humidity_percentage</span>
					<p>Humidity</p>
				</div>
				<div>{data?.current?.humidity}%</div>
				<div className="detailIconName">
					<span className="material-symbols-outlined">air</span>
					<p>Wind speed</p>
				</div>
				<div>{data?.current?.wind_kph}%</div>
			</div>
		</div>
	);
}

export default ForecastCurrent;
