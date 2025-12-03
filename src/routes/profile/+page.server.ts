import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = ({ locals }) => {
	if (!locals.user) {
		throw redirect(303, '/login');
	}
};

export const actions: Actions = {
	async logout({ cookies }) {
		cookies.delete('session', { path: '/' });
		throw redirect(303, '/');
	}
};
