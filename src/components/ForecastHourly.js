import { forecastHourly } from "../services/WeatherData";
import React, { useEffect, useState } from "react";

//Received a list from the API service which needs to be rendered as a list
function renderHourlyList() {
	return;
}

function ForecastHourly({ chosenCity }) {
	const [data, setData] = useState();

	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const data = await forecastHourly(chosenCity);
			// set state with the result
			setData(data);
		};
		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
		chosenCity = chosenCity;
	}, [chosenCity]);
	return <div className="forecastHourly"></div>;
}

export default ForecastHourly;
