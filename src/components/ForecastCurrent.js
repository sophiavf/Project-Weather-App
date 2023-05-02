import React, { useEffect, useState, useContext } from "react";
import format from "date-fns/format";

import { CityContext } from "./contexts/CityContext";

function getFormattedDate(dateStr) {
	if (dateStr !== undefined) {
		const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
		return format(currentDate, "eeee, Mo MMM YYY, p");
	} else {
		return;
	}
}

function ForecastCurrent() {
	const [data, setData] = useState();
	//const [imperialMetric, setImperialMetric] = useState("metric");

	const { city, setCity } = useContext(CityContext);

	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			try {
				const response = await fetch(
					`http://localhost:8000/weather/${city}/current`
				);
				const data = await response.json();
				// set state with the result
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};
		// call the function, but only if city is not undefined
		if (city !== undefined) {
			fetchData();
		}
	}, [city]);

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
