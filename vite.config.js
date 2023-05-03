import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
	root: "src",
	build: {
		// Relative to the root
		outDir: "./dist",
	},

	plugins: [
		// createHtmlPlugin({
		// 	minify: true,
		// 	entry: "./index.html",
		// 	inject: {
		// 		data: {
		// 			title: "My Weather App",
		// 			injectScript: `<script src="./src/index.js"></script>`,
		// 		},
		// 	},
		// }),
		react({
			include: /\.(mdx|js|jsx|ts|tsx)$/,
		}),
		viteTsconfigPaths(),
	],
});
