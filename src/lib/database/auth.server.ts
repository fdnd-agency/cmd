import { dev } from '$app/environment';

import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { sql } from '@vercel/postgres';
import { Lucia } from 'lucia';
import { usersSessionsTable, usersTable } from './schema';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';



export const db = drizzle(sql, { schema	 })

const dbAdapter = new DrizzlePostgreSQLAdapter(db, usersSessionsTable, usersTable);

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