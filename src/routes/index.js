import createClient from '$lib/vendors/prismicClient';

export async function get({ fetch }) {
	const client = createClient({ fetch });
	const page = await client.getSingle('midterm');

	const standards = await Promise.all(
		page.data.standards.map(async (s) => {
			const response = await client.getByUID('standard', s.standard.uid);
			console.log(response);
			return response;
		})
	);

	if (page)
		return {
			body: {
				page,
				standards
			}
		};

	return {
		status: 404
	};
}
