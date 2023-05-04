export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className=" flex flex-col items-center bg-primary text-slate-200 p-3">
			<div className="">
				Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy;{currentYear}
			</div>
			<div>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></div>
		</footer>
	);
}