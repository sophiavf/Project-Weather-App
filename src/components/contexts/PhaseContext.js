import React, { createContext, useContext, useState, useEffect } from "react";

//Create a context object
export const PhaseContext = createContext(); // sets initial value of context to nothing

export function PhaseProvider(props) {
	const [phase, setPhase] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		//get the current time
		const currentTime = new Date().getHours();

		if (currentTime >= 6 && currentTime < 12) {
			setPhase("morning");
		} else if (currentTime >= 12 && currentTime < 18) {
			setPhase("day");
		} else if (currentTime >= 18 && currentTime < 21) {
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
		<PhaseContext.Provider value={{ phase, imageUrl }}>
			{props.children}{" "}
		</PhaseContext.Provider>
	);
}
