// webpack v4
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
module.exports =
	{
		entry: { main: './src/index.js' },
		output:
		{
			path: path.resolve(__dirname, 'dist'),
			filename: 'main.js',
		},
		target: 'web',
		devtool: 'eval-source-map',
		module:
		{
			rules:
			[
				{
					test: /\.txt$/i,
					use: 'raw-loader',
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use:
					{
						loader: "babel-loader",
					}
				},
				{
					test: /\.js$/,
					use: ["source-map-loader"],
					enforce: "pre"
				},
				{
					test: /\.(css|scss$)/,
					use:
					[
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						{
							loader: 'sass-loader',
							options: {
								importer: globImporter()
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use:
					{
						loader: 'svg-inline-loader',
					}
				}
			]
		},
		plugins:
		[
			new CleanWebpackPlugin('dist', {}),
			new MiniCssExtractPlugin({
				filename: 'style.css',
			}),
			new HtmlWebpackPlugin({
				inject: false,
				hash: true,
				template: './src/index.html',
				filename: 'index.html',
			}),
			new webpack.DefinePlugin({
				PRODUCTION: JSON.stringify(true),
				FOO: JSON.stringify('bar'),
				VERSION: JSON.stringify('5fa3b9'),
				BROWSER_SUPPORTS_HTML5: true,
				TWO: '1+1',
				'typeof window': JSON.stringify('object'),
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				},
			})
		]
	}
