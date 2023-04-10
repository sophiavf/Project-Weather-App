export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<div className="footerContent">
				Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy $
				{currentYear}`
			</div>
		</footer>
	);
}
