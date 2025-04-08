import type { PageServerLoad } from './$types';
import type { Blog } from './page.server';

// temporary fix before i figure out how databases work

const blogsArr: Blog[] = [
	{
		title: 'Whole Page Revamp',
		description: 'Full migration to SvelteKit, actual good coding practices, and more!',
		slug: 'new_page',
		timestamp: 1742177352978
	},
	{
		title: 'Lighting Project',
		description:
			'Design Tech - Making a lighting solution with a phone camera to light up in a camping scenario with adjustable height and angle!',
		slug: 'lighting_project',
		timestamp: 1742995371000
	},
	{
		title: "Vinyl Cutter Project",
		description:
			'Design Tech - Using Rhino and a vinyl cutter to make stickers and decals!',
		slug: "vinyl_cutter",
		timestamp: 1743679135000,
	}
].sort((a, b) => b.timestamp - a.timestamp);

export const load: PageServerLoad = async () => {
	return { data: blogsArr };
};
