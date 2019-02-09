// webpack v4
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =
{
	entry: { main: './src/index.js' },
	output:
	{
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	target: 'node',
    externals: [nodeExternals()],
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:
                [
                    'style-loader', MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins:
    [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]

}
