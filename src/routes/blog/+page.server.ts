import type { PageServerLoad } from './$types';
import type { Blog } from './page.server';

// temporary fix before i figure out how databases work

const blogsArr: Blog[] = [
	{
		title: 'Whole Page Revamp',
		description: 'Full migration to SvelteKit, actual good coding practices, and more!',
		slug: 'new_page',
		timestamp: 1741140671708
	}
];

export const load: PageServerLoad = async () => {
	return { data: blogsArr };
};
