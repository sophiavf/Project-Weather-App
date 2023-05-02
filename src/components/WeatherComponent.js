import React, { useEffect, useState, useContext } from "react";

//import components

import ForecastCurrent from "./ForecastCurrent";
import ForecastDisplay from "./ForecastDisplay";

//import context
import { PhaseContext } from "./contexts/PhaseContext";
import { CityContext } from "./contexts/CityContext";

export default function WeatherComponent() {
	//Context
	const { phase, imageUrl, locationTime, setLocationTime } =
		useContext(PhaseContext);
	const { city, setCity } = useContext(CityContext);

	if (city === null) {
		return <div>Loading...</div>;
	}
	return (
		<div className="weatherContent" style={{ backgroundImage: `url(${imageUrl})` }}>
			<div>Good {phase} </div>
			<ForecastCurrent />
			<ForecastDisplay />
		</div>
	);
}
