import { lucia } from '$lib/server/lucia'
import { fail, redirect } from '@sveltejs/kit'


export const actions = {
    default: async ({ request }) => {
        const { name, username, password } = Object.fromEntries(await request.formData());
        try {
            await lucia.createUser({
                primaryKey: {
                    providerId: 'username',
                    providerUserId: username,
                    password
                },
                attributes: {
                    name,
                    username
                }
            });
        } catch (err) {
            console.error(err);
            return fail(400, { message: 'Could not register user' });
        }
        throw redirect(302, '/login');
    }
};


