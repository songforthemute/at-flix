import { API_KEY, BASE_URL } from "../libs/libs";

export interface InterfaceMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    popularity: number;
    title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
}

export interface InterfaceGetMovies {
    dates?: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: InterfaceMovie[];
    total_pages: number;
    total_results: number;
}

export const getNowPlayingMovies = async () => {
    return await (
        await fetch(
            `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
        )
    ).json();
};

export const getTopRatedMovies = async () => {
    return await (
        await fetch(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
        )
    ).json();
};

export const getUpcomingMovies = async () => {
    return await (
        await fetch(
            `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
        )
    ).json();
};
