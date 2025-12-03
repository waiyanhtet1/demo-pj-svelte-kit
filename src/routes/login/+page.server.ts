import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = ({ locals }) => {
	if (locals.user) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	async login({ request, cookies }) {
		const formData = await request.formData();

		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		const errors: Record<string, string> = {};

		if (!username) {
			errors.username = 'Username is required';
		}

		if (!password) {
			errors.password = 'Password is required';
		}

		// If any errors exist, return them
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				username,
				password,
				errors
			});
		}

		if (username !== 'admin' || password !== 'admin') {
			return fail(401, {
				username,
				password,
				error: 'Username or password wrong'
			});
		}

		cookies.set('session', 'Adam', { path: '/' });
		throw redirect(303, '/');
	}
};
