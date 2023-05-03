export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className=" flex flex-col">
			<div className="footer-title">
				Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy;{currentYear}
			</div>
			<div>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></div>
		</footer>
	);
}
