import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

type MovieType = {
    id?: number;
    name: string;
    release: number;
    rating: number;
    comment: string;
}

let movies: MovieType[] = [
    {
        id: 1,
        name: "Inception",
        release: 2010,
        rating: 8.8,
        comment: "A mind-bending thriller by Christopher Nolan."
    },
    {
        id: 2,
        name: "The Shawshank Redemption",
        release: 1994,
        rating: 9.3,
        comment: "An inspiring tale of hope and friendship."
    }
]


export const load: PageServerLoad = async () => {
    return {
        movies
    }
};

const validateMovie = (movieData: Omit<MovieType, 'id'>) => {
    if (!movieData.name) {
        return {
            success: false,
            error: "Name is required"
        }
    }

    if (!movieData.release) {
        return {
            success: false,
            error: "Release year is required"
        }
    }

    if (!movieData.rating) {
        return {
            success: false,
            error: `Please rate the movie from 1 to 5 stars`
        };
    }

    if (!movieData.comment) {
        return {
            success: false,
            error: "Comment is required"
        }
    }
    return {
        success: true
    };
}

export const actions: Actions = {
    async addMovie({ request }) {
        const formData = await request.formData();

        const movieData: MovieType = {
            name: formData.get("name") as string,
            rating: Number(formData.get("rating")),
            comment: formData.get("comment") as string,
            release: Number(formData.get("release")),
        }


        const validation = validateMovie(movieData)

        if (!validation.success) {
            return fail(400, {
                error: validation.error,
                ...movieData
            })
        }

        movies.push(
            {
                ...movieData,
                id: movies.length + 1
            }
        )

        return {
            success: true,
        }


    },

    async deleteMovie({ request }) {
        const movieId = (await request.formData()).get('movieToDelete');

        movies = movies.filter(movie => movie.id !== Number(movieId))


    }

};
