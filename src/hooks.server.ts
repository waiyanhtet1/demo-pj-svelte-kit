export const handle = ({ event, resolve }) => {
	const { locals, cookies } = event;

	if (cookies.get('session')) {
		locals.user = cookies.get('session');
	}

	return resolve(event);
};
