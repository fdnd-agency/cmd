import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit'

dotenv.config();
const { POSTGRES_URL } = process.env;

if (!POSTGRES_URL) {
	throw new Error(
		'No DATABASE_URL defined in the environment variables. Please ensure it is set in the .env file.'
	);
}

export default defineConfig({
	schema: 'src/lib/database/schema.ts',
	out: './drizzleMigrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: POSTGRES_URL,
	},
	verbose: true,
	strict: true,
})
