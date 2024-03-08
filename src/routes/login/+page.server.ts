import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { eq } from 'drizzle-orm';
import { Argon2id } from 'oslo/password';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

import { deleteSessionCookie } from '$lib/database/authUtils.server';
import { createAndSetSession } from '$lib/database/authUtils.server';
import { db } from '$lib/database/auth.server';
import { lucia } from '$lib/database/auth.server';
import { usersTable } from '$lib/database/schema';
import type { AlertMessageType } from '$lib/types';
import { UserLoginZodSchema } from '$lib/validations/AuthZodSchemas';

export const load = (async () => {

	return {
		userLoginFormData: await superValidate(zod(UserLoginZodSchema))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout: async ({ cookies, locals }) => {
		if (!locals.session?.id) return;

		await lucia.invalidateSession(locals.session.id);

		await deleteSessionCookie(lucia, cookies);

		throw redirect(303, "/");
	},
	logInUser: async ({ request, cookies }) => {
		const userLoginFormData = await superValidate<
        typeof UserLoginZodSchema, 
        AlertMessageType
        >(request, zod(UserLoginZodSchema));

		if (userLoginFormData.valid === false) {
			return message(userLoginFormData, {
				alertType: 'error',

				alertText: 'There was a problem with your submission.'
			});
		}

		const [existingUser] = await db
			.select({
				id: usersTable.id,
				password: usersTable.password
			})
			.from(usersTable)
			.where(eq(usersTable.email, userLoginFormData.data.email));

		if (existingUser === undefined) {
			return setError(userLoginFormData, 'email', 'Email not registered');
		}

		const validPassword = await new Argon2id().verify(
			existingUser.password,
			userLoginFormData.data.password
		);

		if (!validPassword) {
			return setError(userLoginFormData, 'password', 'Incorrect password');
		}

		await createAndSetSession(lucia, existingUser.id, cookies);

		throw redirect(303, "/");
	}
};

