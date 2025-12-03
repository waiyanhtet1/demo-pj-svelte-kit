import { BASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";


type Character = {
    id: number;
    name: string;
    image: string;
    occupation: string;
}


export const load: PageServerLoad = async () => {

    const res = await fetch(`${BASE_URL}/characters`);
    const characters: Character[] = await res.json();


    return {
        characters
    }
};