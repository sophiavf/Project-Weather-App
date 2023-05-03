import React, { useContext } from "react";

import { CityContext } from "../components/contexts/CityContext";

export default function Header() {
	//Source: https://react.dev/learn/managing-state#reacting-to-input-with-state

	const { city, setCity } = useContext(CityContext);

	function handleSubmit(e) {
		e.preventDefault();
		setCity(e.target.cityInput.value);
		e.target.cityInput.value = "";
	}

	return (
		<header className="flex items-center justify-between p-2 bg-primary">
			<div className="headerLogo">
				<h1>Your Personal Weather App</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<input className="input input-bordered"
					type="text"
					name="cityInput"
					placeholder="Search for a city"
				></input>
				<button className="btn" type="submit">Submit</button>
			</form>
		</header>
	);
}
