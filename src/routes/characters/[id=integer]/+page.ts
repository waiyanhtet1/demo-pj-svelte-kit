import { error } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

type CharacterType = {
    "id": number,
    "name": string,
    "image": string,
    "gender": string,
    "hairColor": string,
    "occupation": string,
    "firstEpisode": string,
    "voicedBy": string,
    "url": string,
    "wikiUrl": string,
    "relatives": []
}

export const load: PageLoad = async ({ params }) => {
    const id = (params as { id: string }).id;

    const res = await fetch(`https://svelte.fun/api/bobs-burgers/characters/${id}`);

    if (!res.ok) {
        const err = await res.json();
        throw error(res.status, err.message)
    }

    const character: CharacterType = await res.json();

    return {
        character
    }
};