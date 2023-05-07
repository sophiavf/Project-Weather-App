/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: ["fantasy"],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
