export default function Header({ setChosenCity }) {
	//Source: https://react.dev/learn/managing-state#reacting-to-input-with-state
	function handleSubmit(e) {
		e.preventDefault();
		setChosenCity(e.target.cityInput.value);
		e.target.cityInput.value = "";
	}

	return (
		<header>
			<div className="headerLogo">
				<span className="material-symbols-outlined">thermostat</span>
				<h1>Your Personal Weather App</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="cityInput"
					placeholder="Search for a city"
				></input>
				<button type="submit">Submit</button>
			</form>
		</header>
	);
}
