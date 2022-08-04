const IMG_URL = process.env.REACT_APP_IMG_URL;

export function getImagePath(id: string, format?: string) {
    return `${IMG_URL}/${format ? format : "original"}/${id}`;
}

export function isMobile() {
    const { userAgent } = window.navigator;

    if (
        userAgent.match(
            /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i
        )
    ) {
        return false;
    } else {
        return true;
    }
}
