import 'dotenv/config';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { db } from './lib/database/auth.server';
// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './drizzleMigrations' });
// Don't forget to close the connection, otherwise the script will hang
