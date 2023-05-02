import React, { createContext, useState, useEffect } from "react";

export const CityContext = createContext();

export function CityProvider({ children }) {
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
		<CityContext.Provider value={{ city, setCity }}>
			{children}
		</CityContext.Provider>
	);
}
