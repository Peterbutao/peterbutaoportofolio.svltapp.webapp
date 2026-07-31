import { error } from '@sveltejs/kit';
import { getDesignBySlug, designs } from '$lib/data/designs';

export function load({ params }) {
	const design = getDesignBySlug(params.slug);
	if (!design) {
		throw error(404, 'Design not found');
	}

	return {
		design,
		designs
	};
}
