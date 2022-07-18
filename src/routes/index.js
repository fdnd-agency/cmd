import createClient from '$lib/vendors/prismicClient';

export async function get({ fetch }) {
	const client = createClient({ fetch });
	const page = await client.getSingle('midterm');

	const standards = await Promise.all(
		page.data.standards.map(async (s) => {
			const standard = await client.getByUID('standard', s.standard.uid);

			const chapters = await Promise.all(
				standard.data.chapters.map(async (s) => {
					const chapter = await client.getByUID('chapter', s.chapter.uid);

					return chapter;
				})
			);

			standard.data.chapters = chapters;

			return standard;
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
