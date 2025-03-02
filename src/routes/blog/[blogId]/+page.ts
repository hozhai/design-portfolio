import type { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const file: SvelteComponent = await import(`$lib/mdx/blog/${params.blogId}.md`);
		return {
			component: file.default,
			metadata: file.metadata
		};
	} catch {
		console.warn('Blog post not found: ', params.blogId);
	}
};
