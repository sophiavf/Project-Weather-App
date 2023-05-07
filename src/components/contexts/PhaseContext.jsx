import React, { createContext, useState, useContext, useEffect } from "react";

//import context

import { CityContext } from "./CityContext";

//Create a context object
export const PhaseContext = createContext(); // sets initial value of context to nothing

export function PhaseProvider(props) {
	const [phase, setPhase] = useState("");
	const [imageUrl, setImageUrl] = useState({});
	const [locationTime, setLocationTime] = useState("");
	const [condition, setCondition] = useState("");

	//CityContext
	const { city, setCity } = useContext(CityContext);

	useEffect(() => {
		//get the current time
		const hours = new Date(locationTime).getHours();

		if (hours >= 6 && hours < 12) {
			setPhase("morning");
		} else if (hours >= 12 && hours < 18) {
			setPhase("day");
		} else if (hours >= 18 && hours < 21) {
			setPhase("evening");
		} else {
			setPhase("night");
		}

		async function fetchImageUrl() {
			if (phase !== "") {
				try {
					const response = await fetch(
						`https://friendly-liger-249f68.netlify.app//photo/${phase}+${city}+${condition}`
					);
					const data = await response.json();
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					setImageUrl(data.photoUrl);
				} catch (error) {
					console.log(error);
				}
			}
		}
		fetchImageUrl();
	}, [locationTime]);

	return (
		//passes the phase and image url values down to children components
		<PhaseContext.Provider
			value={{ phase, imageUrl, locationTime, setLocationTime, setCondition }}
		>
			{props.children}
		</PhaseContext.Provider>
	);
}
