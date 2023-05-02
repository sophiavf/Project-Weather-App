import React, { useEffect, useState, useContext } from "react";
import format from "date-fns/format";

import { CityContext } from "./contexts/CityContext";
import { PhaseContext } from "./contexts/PhaseContext";

function getFormattedDate(dateStr, context) {
	const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
	if (context) {
		return format(currentDate, "eeee, Mo MMM YYY, p");
	} else {
		return currentDate;
	}
}

function ForecastCurrent() {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	//const [imperialMetric, setImperialMetric] = useState("metric");

	const { city, setCity } = useContext(CityContext);
	const { phase, imageUrl, locationTime, setLocationTime } =
		useContext(PhaseContext);

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
				setLocationTime(getFormattedDate(data?.location?.localtime_epoch));
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		// call the function, but only if city is not undefined
		if (city) {
			fetchData();
		}
	}, [city]);

	return (
		<div className="forecastCurrent">
			{isLoading ? (
				<p>Loading</p>
			) : (
				<>
					<div className="currentWeather">
						<img src={data?.current?.condition?.icon} />
						<div className="temp">{data?.current?.temp_c}&deg;C</div>
						<div className="condition">{data?.current?.condition?.text}</div>
						<div className="location">{data?.location?.name}</div>
						<div className="localTime">
							{getFormattedDate(data?.location?.localtime_epoch, "true")}
						</div>
					</div>
					<div className="details">
						<div className="detailIconName">
							<span className="material-symbols-outlined">
								device_thermostat
							</span>
							<p>Feels like</p>
						</div>
						<div>{data?.current?.feelslike_c}&deg;C</div>
						<div className="detailIconName">
							<span className="material-symbols-outlined">
								humidity_percentage
							</span>
							<p>Humidity</p>
						</div>
						<div>{data?.current?.humidity}%</div>
						<div className="detailIconName">
							<span className="material-symbols-outlined">air</span>
							<p>Wind speed</p>
						</div>
						<div>{data?.current?.wind_kph}%</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ForecastCurrent;
