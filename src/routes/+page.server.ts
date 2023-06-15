import { kitClient } from '$lib/graphql/client';
import { error } from '@sveltejs/kit';

import type { GetTagsQuery, HomePageQuery } from '$lib/graphql/generated/sdk';

export async function load() {
	try {
		const werkvormenQuery = kitClient.HomePage();
		const tagQuery = kitClient.getTags();

		const [werkvormen, tags] = await Promise.allSettled([werkvormenQuery, tagQuery]);

		return {
			werkvormen: (werkvormen as PromiseFulfilledResult<HomePageQuery>).value,
			tags: (tags as PromiseFulfilledResult<GetTagsQuery>).value.tags
		};
	} catch (err) {
		throw error(404, `${err}`);
	}
}
