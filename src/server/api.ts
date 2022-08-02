const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

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
}

export interface InterfaceGetMovies {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: InterfaceMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`
    ).then((response) => response.json());
}
