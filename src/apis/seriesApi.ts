import { API_KEY, BASE_URL } from "../libs";

export interface InterfaceSeries {
    id: number;
    name: string;
    backdrop_path: string;
    poster_path: string;
    first_air_date: string;
    origin_country: string[];
    original_name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
    title?: string;
}

export interface InterfaceGetSeries {
    page: number;
    results: InterfaceSeries[];
    total_pages: number;
    total_results: number;
}

export function getOnTheAirSeries() {
    return fetch(
        `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ko-KR&page=1`
    ).then((response) => response.json());
}

export function getPopularSeries() {
    return fetch(
        `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    ).then((response) => response.json());
}

export function getTopRatedSeries() {
    return fetch(
        `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    ).then((response) => response.json());
}
