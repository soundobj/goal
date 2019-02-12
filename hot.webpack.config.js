// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =
{
	entry: { main: './src/index.js' },
	output:
	{
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	target: 'web',
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
                test: /\.scss$/,
                use:
                [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
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
        new WebpackMd5Hash(),
    ]

}
