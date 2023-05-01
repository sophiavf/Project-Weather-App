import React, { useState, useEffect } from "react";
//Importing context
import { PhaseProvider } from "./components/PhaseProvider";
import { ThemeProvider } from "./components/ThemeContext";

//importing components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ForecastCurrent from "./components/ForecastCurrent";
import ForecastDisplay from "./components/ForecastDisplay";

export default function App() {
	const [city, setCity] = useState(); // initial state is set by users IP address below
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
	}, []); // an empty dependency array ([]) to run the effect only once when the component mounts.

	return (
		<PhaseProvider>
			<ThemeProvider>
				<div className="contentContainer">
					<Header setChosenCity={setCity} />
					<div className="forecastContent">
						<ForecastCurrent chosenCity={city} />
						<ForecastDisplay chosenCity={city} />
					</div>
					<Footer />
				</div>
			</ThemeProvider>
		</PhaseProvider>
	);
}
