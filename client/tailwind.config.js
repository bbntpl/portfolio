/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.ts",
		"./**/*.html"
	],
	theme: {
		colors: {
			'midnight': {
				DEFAULT: '#001C30',
			},
			'bluemine': {
				300: '#86B8CF',
				400: '#66A3BE',
				source: '#176B87'
			},
			'downy': {
				100: '#C2E4E0',
				200: '#9AD1CC',
				300: '#73BDB8',
				700: '#006B66',
				source: '#64CCC5'
			},
			'frostedmint': {
				DEFAULT: '#DAFFFB'
			}
		},
		extend: {
			spacing: {
				'header-height': '4rem'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

