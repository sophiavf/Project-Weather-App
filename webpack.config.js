const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== "production"
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/assets/index.html",
			title: "Weather App",
			favicon: "./src/assets/weather-app.png"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true,
	},
	optimization: {
		runtimeChunk: "single",
	},
};
