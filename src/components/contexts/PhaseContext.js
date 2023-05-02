import React, { createContext, useState, useEffect } from "react";

//Create a context object
export const PhaseContext = createContext(); // sets initial value of context to nothing

export function PhaseProvider(props) {
	const [phase, setPhase] = useState("");
	const [imageUrl, setImageUrl] = useState({});
	const [locationTime, setLocationTime] = useState("");

	useEffect(() => {
		//get the current time
		const currentTime = locationTime;
		const hours = currentTime.getHours;

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
					const response = await fetch(`http://localhost:8000/photo/${phase}`);
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
	}, [phase]);

	return (
		//passes the phase and image url values down to children components
		<PhaseContext.Provider
			value={{ phase, imageUrl, locationTime, setLocationTime }}
		>
			{props.children}
		</PhaseContext.Provider>
	);
}
