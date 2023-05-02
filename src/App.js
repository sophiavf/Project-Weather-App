import React, { useContext } from "react";
//Importing context
import { PhaseProvider } from "./components/contexts/PhaseContext.js";
import { ThemeProvider } from "./components/contexts/ThemeContext.js";
import { CityProvider } from "./components/contexts/CityContext.js";

//importing components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import WeatherComponent from "./components/WeatherComponent.js";

export default function App() {

	return (
		<PhaseProvider>
			<ThemeProvider>
				<div className="contentContainer">
					<CityProvider>
						<Header />
						<WeatherComponent />
						<Footer />
					</CityProvider>
				</div>
			</ThemeProvider>
		</PhaseProvider>
	);
}
