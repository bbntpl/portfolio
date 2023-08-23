const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		'autoprefixer',
		'postcss-preset-env',
		tailwindcss,
		cssnano(),
	],
}