import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeHighlight from "rehype-highlight"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: [".md", ".svx"],
			remarkPlugins: [remarkMath, remarkGfm],
			rehypePlugins: [rehypeKatexSvelte, rehypeHighlight],
			highlight: {
				highlighter: async (code, lang) => {
					return `<pre><code class="language-${lang}">${escapeSvelte(code)}</code></pre>`
				}
			}
		}),
		vitePreprocess(),
	],

	kit: {
		adapter: adapter(),
		alias: {
			"@/*": "./src/lib/*"
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
