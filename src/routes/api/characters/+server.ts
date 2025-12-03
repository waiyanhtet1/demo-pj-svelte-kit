import { BASE_URL } from "$env/static/private";

export const GET = async () => {
    const res = await fetch(`${BASE_URL}/characters`);
    const data = await res.json();

    return new Response(JSON.stringify(data));
} 