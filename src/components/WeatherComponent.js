import React, { useEffect, useState, useContext } from "react";

//import components

import ForecastCurrent from "./ForecastCurrent";
import ForecastDisplay from "./ForecastDisplay";

//import context
import { PhaseContext } from "./contexts/PhaseContext";
import { CityContext } from "./contexts/CityContext";

export default function WeatherComponent() {
	const { phase, imageUrl } = useContext(PhaseContext);

	const {city, setCity} = useContext(CityContext); 

	if (city === null) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div>Good {phase} </div>
			<ForecastCurrent />
			<ForecastDisplay />
		</div>
	);
}
