/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
	content: [
		"./src/**/*.ts",
		"./**/*.html"
	],
	theme: {
		extend: {
			spacing: {
				'header-height': '4rem'
			},
			fontFamily: {
				'layout': ['AvenirBook', 'AvenirRoman', ...defaultTheme.fontFamily.sans],
				'intro': ['PromptMedium', 'AvenirBook', 'AvenirRoman', 'sans-serif'],
			}
		},
		fontFamily: {
			sans: ['Roboto', 'AvenirBook', 'AvenirRoman', ...defaultTheme.fontFamily.sans],
			heading: ['AvenirBook', 'AvenirRoman', 'sans-serif'],
			body: ['Roboto', 'AvenirRoman', 'AvenirBook']
		},
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

	},
	variants: {
		extend: {},
	},
	plugins: [],
}

