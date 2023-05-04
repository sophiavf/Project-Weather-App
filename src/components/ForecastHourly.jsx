import format from "date-fns/format";

function getFormattedDate(dateStr, element) {
	const currentDate = new Date(dateStr); // To convert from epoch (* 1000)
	if (dateStr !== undefined && element) {
		return format(currentDate, "p");
	} else {
		return currentDate;
	}
}

function ForecastHourly({ forecastData }) {
	return (
		<div className="forecastHourly">
			{forecastData !== undefined ? hourlyElementList(forecastData) : <p></p>}
		</div>
	);
}

export default ForecastHourly;

//Receives data from the API service and renders it
function hourlyElementList(data) {
	let next24HourForecast = [];

	if (data !== undefined) {
		//Gets the current local time from the data
		const currentLocalTime = getFormattedDate(data?.location?.localtime);
		//Includes only the forecast data from the api
		const forecastDays = data.forecast.forecastday;
		//Adds 24 hours to the currentLocalTime, used to ensure we only include the next 24 hours in the rendered array in the for loop
		const twentyFourHours = new Date(
			currentLocalTime.getTime() + 60 * 60 * 24 * 1000
		);

		//Loops through the 2d array: Days -> hours
		for (let i = 0; i < forecastDays.length; i++) {
			const hourlyData = forecastDays[i].hour;
			for (let j = 0; j < hourlyData.length; j++) {
				const forecastTime = new Date(hourlyData[j].time);
				//Checks that hours is in the future, but no greater than 24 hours in the future
				if (
					forecastTime >= currentLocalTime &&
					forecastTime <= twentyFourHours
				) {
					next24HourForecast.push(hourlyData[j]);
				}
			}
		}

		const hourlyForecast = next24HourForecast.map((hour, index) => (
			<div
				className="rounded-box flex flex-col bg-primary p-6 m-2 justify-center items-center shadow-lg hover:bg-blue-700 text-base-100"
				key={index}
			>
				<div className="hourlyTime whitespace-nowrap">
					{getFormattedDate(hour.time, true)}
				</div>
				<img src={hour.condition.icon} />
				<div>{hour?.temp_c}&deg;C</div>
			</div>
		));
		return (
			<div className="shadow-inner overflow-y-hidden overflow-x-scroll rounded-box flex m-10  bg-base-100">
				{hourlyForecast}
			</div>
		);
	}
	return;
}
