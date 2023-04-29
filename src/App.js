import React, { Component } from "react";
import { useState, useEffect } from "react";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ForecastCurrent from "./components/ForecastCurrent";
import ForecastDisplay from "./components/ForecastDisplay";

export default function App() {
	const [city, setCity] = useState("London"); // Sets initial state

	useEffect(() => {
		async function getUserCityFromIP() {
			try {
				const response = await fetch("https://ipapi.co/json/");
				const data = await response.json();
				const ipCity = data.city;
				setCity(ipCity);
			} catch (error) {
				console.error(error);
			}
		}
		getUserCityFromIP();
	}, []); // Stops the function running twice
	return (
		<div className="contentContainer">
			<Header setChosenCity={setCity} />
			<div className="forecastContent">
				<ForecastCurrent chosenCity={city} />
				<ForecastDisplay chosenCity={city} />
			</div>
			<Footer />
		</div>
	);
}
