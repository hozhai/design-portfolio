import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		return {
			file: await import(`$lib/mdx/blog/${params.blogId}.md`)
		};
	} catch {
		console.warn('Blog post not found: ', params.blogId);
	}
};
