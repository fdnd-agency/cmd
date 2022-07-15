import createClient from '$lib/vendors/prismicClient';

export async function get({ fetch }) {
	const client = createClient({ fetch });
	const page = await client.getSingle('midterm');

	const standards = await Promise.all(
		page.data.standards.map(async (s) => {
			const response = await client.getByUID('standard', s.standard.uid);

			const chapters = await Promise.all(response.data.chapters.map(async (s) => {
				const response = await client.getByUID('chapter', s.chapter.uid)

				return response;
			}))

			response.data.chapters = chapters

			console.log(chapters)
			
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
