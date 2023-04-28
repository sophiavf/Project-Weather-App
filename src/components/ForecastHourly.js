import format from "date-fns/format";

function getFormattedDate(dateStr, element) {
	const currentDate = new Date(dateStr * 1000); // To convert from epoch (* 1000)
	if (dateStr !== undefined && element) {
		return format(currentDate, "p");
	} else {
		return currentDate;
	}
}

//Receives data from the API service and renders it
function hourlyElementList(data) {
	var now = new Date();
	if (data !== undefined) {
		// Gets only the data https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.cm.reg/student/modules/detail/light/458528/study-year/1615?$ctx=design=ca2;header=max;lang=en&$scrollTo=toc_modhb_beschreibung
		const array = data?.forecast?.forecastday?.[0]?.hour;

		const filtered = array.filter(
			(hour) => getFormattedDate(hour.time_epoch, false) >= now
		);
		const hourlyForecast = filtered.map((hour, index) => (
			<div className="hourContainer" key={index}>
				<div className="hourlyTime">
					{getFormattedDate(hour?.time_epoch, true)}
				</div>
				<img src={hour?.condition?.icon} />
				<div>{hour?.temp_c}&deg;C</div>
			</div>
		));
		return <div>{hourlyForecast}</div>;
	}

	return;
}

function ForecastHourly({ forecastData }) {
	return (
		<div className="forecastHourly">
			{forecastData !== undefined ? hourlyElementList(forecastData) : <p></p>}
		</div>
	);
}

export default ForecastHourly;
