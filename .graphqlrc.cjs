import('dotenv').then((app) =>
	app.config({
		path: __dirname + '/.env'
	})
);

module.exports = {
	schema: process.env.HYGRAPH_URL,
	documents: './src/lib/graphql/**/*.gql',
	extensions: {
		endpoints: {
			default: {
				url: process.env.HYGRAPH_URL
			}
		},
		codegen: {
			overwrite: true,
			generates: {
				'./src/lib/graphql/generated/graphql.schema.json': {
					plugins: ['introspection']
				},
				'./src/lib/graphql/generated/sdk.ts': {
					plugins: [
						'typescript',
						'typescript-operations',
						'typescript-graphql-request',
						'plugin-typescript-swr'
					],
					config: {
						fetcher: {
							endpoint: process.env.HYGRAPH_URL
						},
						rawRequest: false,
						inlineFragmentTypes: 'combine',
						skipTypename: false,
						exportFragmentSpreadSubTypes: true,
						dedupeFragments: true,
						preResolveTypes: true
					}
				},
				'./src/lib/graphql/generated/schema.graphql': {
					// for developer lookup (unused)
					plugins: ['schema-ast']
				}
			}
		}
	}
};
