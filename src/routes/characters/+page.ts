import type { PageLoad } from "./$types";


type Character = {
    id: number;
    name: string;
    image: string;
    occupation: string;
}


const API = 'https://svelte.fun/api/bobs-burgers'; 

export const load: PageLoad = async () => {

const res = await fetch(`${API}/characters`);
const characters: Character[] = await res.json();


    return {
         characters
    }
};