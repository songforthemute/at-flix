import { API_KEY, BASE_URL } from "../libs";

export interface InterfaceGetResult {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    created_by?: {
        id: number;
        credit_id: string;
        name: string;
        gender: number;
        profile_path: string | null;
    }[];
    episode_run_time?: number[];
    first_air_date?: string;
    budget?: number;
    genres: { id: number; name: string }[];
    name?: string;
    number_of_episodes?: number;
    number_of_seasons?: number;
    id: number;
    original_language: string;
    original_title: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    release_date?: string;
    revenue?: string;
    runtime?: string;
    title?: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    overview: string;
}

export function getDetail(type: string, Id: number) {
    return fetch(
        `${BASE_URL}/${type}/${Id}?api_key=${API_KEY}&language=ko-KR`
    ).then((response) => response.json());
}

export interface InterfaceSearchResults {
    backdrop_path: string;
    first_air_date?: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    origin_country: string[] | string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: string;
    name?: string;
    title?: string;
    vote_average: number;
    vote_count: number;
}

export interface InterfaceSearch {
    page: number;
    total_pages: number;
    total_results: number;
    results: InterfaceSearchResults[];
}

export function searchProgram(keyword: string) {
    return fetch(
        `${BASE_URL}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=1`
    ).then((response) => response.json());
}

export interface InterfaceGetVideosResults {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}
export interface InterfaceGetVideos {
    id: number;
    results: InterfaceGetVideosResults[];
}

export function getVideos(genre: string, id: string) {
    return fetch(
        `${BASE_URL}/${genre}/${id}/videos?api_key=${API_KEY}&language=ko-KR&page=1`
    ).then((response) => response.json());
}
