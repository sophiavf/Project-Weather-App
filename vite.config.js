import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
	root: "src",
	build: {
		// Relative to the root
		outDir: "./dist",
	},

	plugins: [
		createHtmlPlugin({
			minify: true,
			entry: "./src/index.js",
			template: "./src/index.html",
			inject: {
				data: {
					title: "My Weather App",
					injectScript: `<script src="./src/index.js"></script>`,
				},
			},
		}),
		react({
			include: /\.(mdx|js|jsx|ts|tsx)$/,
			babel: {
				plugins: ["babel-plugin-styled-components"],
			},
		}),
	],
});
