import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from './auth.server'


async function main() {
await migrate(db, { migrationsFolder: "drizzleMigrations" });
}

main()