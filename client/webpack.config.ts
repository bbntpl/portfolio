import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import { WebpackConfig } from './webpack.types';

const config: WebpackConfig = function (env) {
	return {
		mode: env.production ? 'production' : 'development',
		entry: './src/index.ts',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.ts?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/i,
					include: path.resolve(__dirname, 'src'),
					use: ['style-loader', 'css-loader', 'postcss-loader'],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},
			]
		},
		resolve: {
			extensions: ['.ts', '.js'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'My Portfolio',
				template: 'src/index.html'
			})
		],
		devServer: {
			static: {
				directory: path.join(__dirname, 'dist'),
			},
			proxy: {
				'/api': {
					target: 'http://localhost:3001',
					changeOrigin: true,
				},
			},
			compress: true,
			port: 5500
		},
		devtool: env.production ? 'source-map' : 'eval-source-map',
	}
};

export default config;