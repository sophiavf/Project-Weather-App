import React from "react";
//Importing context
import { PhaseProvider } from "./components/contexts/PhaseContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { CityProvider } from "./components/contexts/CityContext";

//importing components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import WeatherComponent from "./components/WeatherComponent";

export default function App() {
	return (
		<ThemeProvider>
			<CityProvider>
				<PhaseProvider>
					<div className="flex flex-col h-screen">
						<Header />
						<WeatherComponent />
						<Footer />
					</div>
				</PhaseProvider>
			</CityProvider>
		</ThemeProvider>
	);
}
