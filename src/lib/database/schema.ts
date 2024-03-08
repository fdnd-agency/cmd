import { sql } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';


export const usersTable = pgTable('users', {
	id: text('id').primaryKey().notNull(),

	name: text('name').notNull(),

	email: text('email').notNull().unique(),

	password: text('password').notNull(),

	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
});

export const usersSessionsTable = pgTable('users_sessions', {
	id: text('id').primaryKey().notNull(),

	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id),

	expiresAt: timestamp('expires_at', { mode: "date", precision: 6, withTimezone: true}).notNull()
});

export type UserInsertSchema = typeof usersTable.$inferInsert;