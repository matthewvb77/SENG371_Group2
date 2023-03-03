/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./Screens/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'money': "url('./assets/money.png')",
			}
		},
	},
	plugins: [],
};
