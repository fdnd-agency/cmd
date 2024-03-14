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

// Fetch data from Directus
export async function load(event) {
	// Get all data from seperate collections
	const reqWorkform = await fetch(
		'https://platform-big-themes.directus.app/items/workform?fields=*.*.*'
	);
	const reqCourse = await fetch('https://platform-big-themes.directus.app/items/course');
	const reqContact = await fetch('https://platform-big-themes.directus.app/items/contact');
	const reqTag = await fetch('https://platform-big-themes.directus.app/items/tag');
	const dataWorkform = await reqWorkform.json();
	const dataCourse = await reqCourse.json();
	const dataContact = await reqContact.json();
	const dataTag = await reqTag.json();
	const user = event.locals.user;

	const data = {
		workform: dataWorkform.data,
		course: dataCourse.data,
		contact: dataContact.data,
		tag: dataTag.data,
		user: user
	};

	return data;
}
