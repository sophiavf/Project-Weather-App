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
		<div className="flex-1">
			<div className="text-center p-3 font-semibold text-3xl text-secondary-content bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary">
				Good {phase}{" "}
			</div>
			<div
				className="weatherContent bg-cover bg-center bg-no-repeat items-center justify-center flex flex-col h-full"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				<ForecastCurrent />
				<ForecastDisplay />
			</div>
		</div>
	);
}
