// webpack v4
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
                test: /\.scss$/,
                use:
                [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    // 'sass-loader',
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
    ]
}
