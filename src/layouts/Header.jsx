import React, { useContext } from "react";

import { CityContext } from "../components/contexts/CityContext";

import { CloudIcon } from "@heroicons/react/24/outline";

export default function Header() {
	//Source: https://react.dev/learn/managing-state#reacting-to-input-with-state

	const { city, setCity } = useContext(CityContext);

	function handleSubmit(e) {
		e.preventDefault();
		setCity(e.target.cityInput.value);
		e.target.cityInput.value = "";
	}

	return (
		<header className="md:flex items-center justify-around p-2 bg-primary lg:px-40">
			<div className="flex items-center color text-slate-200 m-2">
				<CloudIcon className="h-8 w-8" /> 
				<h1 className="md:text-2xl text-xl">Your Personal Weather App</h1>
			</div>
			<form className=" m-2" onSubmit={handleSubmit}>
				<input
					className="input input-bordered mr-4 h-11"
					type="text"
					name="cityInput"
					placeholder="Search for a city"
				></input>
				<button className="btn btn-secondary" type="submit">
					Submit
				</button>
			</form>
		</header>
	);
}
