import type { Actions, PageServerLoad } from './$types';

import { redirect } from 'sveltekit-flash-message/server';

import { deleteSessionCookie } from '$lib/database/authUtils.server';
import { lucia } from '$lib/database/auth.server';


export const actions: Actions = {
	logout: async ({ cookies, locals }) => {
		if (!locals.session?.id) return;

		await lucia.invalidateSession(locals.session.id);

		await deleteSessionCookie(lucia, cookies);

		throw redirect(303, "/");
	},

};