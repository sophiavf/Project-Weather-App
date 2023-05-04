const PORT = 8000;

import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import serverless from "server";

import cors from "cors";
import axios from "axios";

// const express = express(); // going into package.json and getting this package and using it by saving it as a const
// const cors = cors();
// const axios = axios();

const app = express();



const weatherApiKey = process.env.WEATHER_API_KEY;
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

app.use(cors());

app.get("/weather/:city/:endpoint/:days?", async (req, res) => {
	const { city, endpoint, days } = req.params; // destructuring params

	if (endpoint !== "current" && endpoint !== "forecast") {
		return res
			.status(400)
			.send('Invalid endpoint. Must be "current" or "forecast".');
	}
	if (city === undefined) {
		return res.status(400).send("A value for the city must be provided.");
	}

	let apiUrl = `https://api.weatherapi.com/v1/${endpoint}.json?key=${weatherApiKey}&q=${city}`;

	if (endpoint === "forecast" && days) {
		apiUrl += `&days=${days}`;
	}

	try {
		const response = await axios.get(apiUrl);
		const data = await response.data;
		res.send(data);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error getting weather data");
	}
});

app.get("/photo/:searchTerm", async (req, res) => {
	const { searchTerm } = req.params;
	const orientation = "landscape";
	const url = `https://api.unsplash.com/photos/random?query=${searchTerm}&orientation=${orientation}&client_id=${unsplashAccessKey}`;

	try {
		const response = await axios.get(url);
		const data = response.data;
		const photoUrl = data.urls.regular;
		res.send({ photoUrl });
	} catch (error) {
		console.error("error");
		res.status(500).send("Error getting photo");
	}
});

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
module.exports.handler = serverless(app); 
