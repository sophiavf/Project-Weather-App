import React, { useEffect, useState, useContext } from "react";
import format from "date-fns/format";

import { CityContext } from "./contexts/CityContext";
import { PhaseContext } from "./contexts/PhaseContext";

//icons
import { MapPinIcon } from "@heroicons/react/24/outline";

function getFormattedDate(dateStr, context) {
	const currentDate = new Date(dateStr); // To convert from epoch (* 1000)
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
	const { phase, imageUrl, locationTime, setLocationTime, setCondition } =
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
				setLocationTime(new Date(getFormattedDate(data?.location?.localtime)));
				setCondition(data?.current?.condition?.text)
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
				<div className="flex flex-col md:flex-row content-center justify-center sm:items-center md:items-stretch m-4 md:m-10 gap-4">
					<div className="card card-bordered items-center bg-base-100 md:w-76 flex content-between shadow-inner sm:w-full">
						<img className="w-24" src={data?.current?.condition?.icon} />
						<div className="card-body items-center">
							<div className="temp ">{data?.current?.temp_c}&deg;C</div>
							<div className="condition">{data?.current?.condition?.text}</div>
							<div className="location card-title">
								<MapPinIcon className="h-6 w-6" />
								{data?.location?.name}
							</div>
							<div className="localTime whitespace-normal">
								{getFormattedDate(data?.location?.localtime, "true")}
							</div>
						</div>
					</div>
					<div className="card card-bordered p-4 bg-base-100 grid gap-4 grid-cols-2 content-center shadow-inner align-middle sm:w-full md:w-76">
						<div className="detailIconName justify-self-center align-self-center  ;">
							<p>Feels like</p>
						</div>
						<div className="justify-self-center align-self-center ">
							{data?.current?.feelslike_c}&deg;C
						</div>
						<div className="detailIconName justify-self-center align-self-center ; ">
							<p>Humidity</p>
						</div>
						<div className="justify-self-center align-self-center ">
							{data?.current?.humidity}%
						</div>
						<div className="detailIconName justify-self-center align-self-center ;">
							<p>Wind speed</p>
						</div>
						<div className="justify-self-center align-self-center ">
							{data?.current?.wind_kph}%
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ForecastCurrent;
