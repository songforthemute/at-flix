const IMG_URL = process.env.REACT_APP_IMG_URL;

export function getImagePath(id: string, format?: string) {
    return `${IMG_URL}/${format ? format : "original"}/${id}`;
}
