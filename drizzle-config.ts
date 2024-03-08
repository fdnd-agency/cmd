import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit'

dotenv.config();

if (!process.env.POSTGRES_URL) {
	throw new Error(
		'No DATABASE_URL defined in the environment variables. Please ensure it is set in the .env file.'
	);
}

export default defineConfig({
	schema: 'src/lib/database/schema.ts',
	out: './drizzleMigrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL,
	},
	verbose: true,
	strict: true,
})
