function Button({ buttonText, buttonClass, onSquareClick }) {
	return (
		<button className={buttonClass} onClick={onClick}>
			{buttonText}
		</button>
	);
}

export default Button;
