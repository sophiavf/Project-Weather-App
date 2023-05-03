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
		<ThemeProvider>
			<div className="contentContainer">
				<CityProvider>
					<PhaseProvider>
						<Header />
						<WeatherComponent />
						<Footer />
					</PhaseProvider>
				</CityProvider>
			</div>
		</ThemeProvider>
	);
}
