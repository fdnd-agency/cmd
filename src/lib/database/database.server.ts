import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { migrate } from "drizzle-orm/postgres-js/migrator";

// const sqliteClient = new Database('localDB/sqlite.db');

export const database = drizzle(sql);

await migrate(database, { migrationsFolder: "drizzleMigrations" });

await sql.end();
