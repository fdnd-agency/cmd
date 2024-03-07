import { dev } from '$app/environment';

import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { NodePostgresAdapter, PostgresJsAdapter } from "@lucia-auth/adapter-postgresql";
import { sql, createPool } from '@vercel/postgres';
import { Lucia } from 'lucia';
import { POSTGRES_URL } from '$env/static/private'
import { database } from './database.server';
import { usersSessionsTable, usersTable } from './schema';

const db = createPool({ connectionString: POSTGRES_URL })

const dbAdapter = new NodePostgresAdapter(db, {usersSessionsTable, usersTable});

export const lucia = new Lucia(dbAdapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},

	getUserAttributes: (attributes) => {
		return {
			name: attributes.name,
			email: attributes.email
		};
	}
});


declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			name: string;
			email: string;
		};
	}
}