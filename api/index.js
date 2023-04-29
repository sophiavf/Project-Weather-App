const PORT = 8000;

const express = require("express"); // going into package.json and getting this package and using it by saving it as a const
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiKey = "06b6a721fa9e44cc9e8172832231004";
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

app.use(cors());

//test
app.get("/", (req, res) => {
	res.json("Hi");
});

app.get("/weather/:city/:endpoint/:days?", async (req, res) => {
	const { city, endpoint, days } = req.params; // destructuring params

	if (endpoint !== "current" && endpoint !== "forecast") {
		return res
			.status(400)
			.json({ error: 'Invalid endpoint. Must be "current" or "forecast".' });
	}

	let apiUrl = `https://api.weatherapi.com/v1/${endpoint}.json?key=${weatherApiKey}&q=${city}`;

	if (endpoint === "forecast" && days) {
		apiUrl += `&days=${days}`;
	}

	try {
		const response = await axios.get(apiUrl);
		const data = response.data;
		res.json(data);
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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// const data = fetch(`http://localhost:8000/weather/london/current`);
// console.log(data);
