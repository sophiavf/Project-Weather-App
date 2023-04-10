import React, { Component } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import ForecastDisplay from "./ForecastDisplay";

export default function App() {
	return (
		<div>
			<Header />

			<ForecastDisplay />

			<Footer />
		</div>
	);
}
