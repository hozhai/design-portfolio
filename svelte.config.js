import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypePrism from 'rehype-prism-plus';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			rehypePlugins: [rehypePrism]
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter(),
		alias: {
			"@/*": "./src/lib/*"
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
