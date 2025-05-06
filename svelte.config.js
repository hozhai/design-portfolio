import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { unified } from 'unified';
import { enhancedImages } from 'mdsvex-enhanced-images';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeHighlight from 'rehype-highlight';
import rehypeHighlightLines from 'rehype-highlight-code-lines';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [enhancedImages, remarkMath, remarkGfm ],
			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }], rehypeKatexSvelte],
			highlight: {
				highlighter: async (code, lang, meta) => {
					const content = `<pre><code class="language-${lang}" data-highlight-lines="${meta}">${escapeSvelte(code)}</code></pre>`;

					const html = await unified()
						.use(rehypeParse, { fragment: true })
						.use(rehypeHighlight)
						.use(rehypeHighlightLines, { showLineNumbers: true })
						.use(rehypeStringify)
						.process(content);

					return escapeSvelte(html.toString());
				}
			}
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './src/lib/*'
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
