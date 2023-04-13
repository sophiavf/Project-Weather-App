import React, { Component } from "react";
import { useState } from "react";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ForecastCurrent from "./components/ForecastCurrent";
import ForecastDisplay from "./components/ForecastDisplay";

export default function App() {
	const [city, setCity] = useState("London"); // Sets initial state
	return (
		<div>
			<Header setChosenCity={setCity} />
			<ForecastCurrent setChosenCity={city} />
			<ForecastDisplay />
			<Footer />
		</div>
	);
}
