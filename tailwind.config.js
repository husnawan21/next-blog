/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '800px',
				xl: '960px',
				xxl: '1080px',
			},
		},
		extend: {},
	},
	plugins: [],
}
