import * as prismic from '@prismicio/client';

// Update your repository name here
const repositoryName = 'cmda-mid-term';

const createClient = (params) => {
	const client = prismic.createClient(repositoryName, params);

	return client;
};

export default createClient;
