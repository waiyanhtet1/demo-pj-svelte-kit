import { BASE_URL } from "$env/static/private";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
    const res = await fetch(`${BASE_URL}/characters/${params.id}`);
    const data = await res.json();

    return new Response(JSON.stringify(data));
} 