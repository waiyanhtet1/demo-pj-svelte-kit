import type { PageServerLoad } from './$types';

type Character = {
	id: number;
	name: string;
	image: string;
	occupation: string;
};

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/characters');
	// const res = await fetch(`${BASE_URL}/characters`);
	const characters: Character[] = await res.json();

	return {
		characters
	};
};
