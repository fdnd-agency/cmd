import { eq } from 'drizzle-orm';
import { db } from './auth.server';
import { usersTable, type UserInsertSchema } from './schema';

export const checkIfEmailExists = async (email: string) => {
	const queryResult = await db
		.select({
			email: usersTable.email
		})
		.from(usersTable)
		.where(eq(usersTable.email, email));

	return queryResult.length > 0;
};

export const insertNewUser = async (user: UserInsertSchema) => {
	return await db.insert(usersTable).values(user);
};

export const getAllUsers = async () => {
	const queryResult = await db
		.select({
			id: usersTable.id,
			name: usersTable.name,
			email: usersTable.email
		})
		.from(usersTable);

	return queryResult;
};

export const deleteAllUsers = async () => {
	return await db.delete(usersTable);
};