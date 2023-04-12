
import { useState } from 'react';

export default function Header() {
	const [city, setCity] = useState(''); // Sets initial state

	//Source: https://react.dev/learn/managing-state#reacting-to-input-with-state
	function handleSubmit(e) {
		e.preventDefault();
	}
	function handleTextareaChange(e) {
		setAnswer(e.target.value);
	  }

	return (
		<header>
			<div className="headerLogo">
				<span className="material-symbols-outlined">thermostat</span>
				<div>Your Personal Weather App</div>
			</div>
			<form onSubmit={handleSubmit}> 
			<input></input>
			</form>
		</header>
	);
}
