import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypePrism from 'rehype-prism-plus';
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: [".md", ".svx"],
			rehypePlugins: [rehypePrism, rehypeKatex],
			remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkMdxFrontmatter]
		}),
		vitePreprocess()
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
