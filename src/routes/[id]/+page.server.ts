import { kitClient } from '$lib/graphql/client';

export async function load({ params }) {
	const data = await kitClient.DetailPage({ link: params.id });

	return { ...data.werkvormen[0] };
}
