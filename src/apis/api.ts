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

export function getNowPlayingMovies() {
    return fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
    ).then((response) => response.json());
}

export function getPopularMovies() {
    return fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
    ).then((response) => response.json());
}

export function getUpcomingMovies() {
    return fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
    ).then((response) => response.json());
}

export function getMovieDetail(movieId: number) {
    return fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
    ).then((response) => response.json());
}

export function searchProgram() {
    // return fetch();
}
