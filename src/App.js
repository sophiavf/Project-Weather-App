import React, { Component } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import ForecastCurrent from "./components/ForecastCurrent";
import ForecastCurrentDetails from "./components/ForecastCurrentDetails";
import ForecastDisplay from "./components/ForecastDisplay";

export default function App() {
	return (
		<div>
			<Header />
			<ForecastCurrent />
			<ForecastCurrentDetails />
			<ForecastDisplay />
			<Footer />
		</div>
	);
}
