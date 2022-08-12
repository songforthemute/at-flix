const IMG_URL = process.env.REACT_APP_IMG_URL;

export type programTypes = "movie" | "series";

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

export const genres: { [key: string]: string } = {
    "28": "액션",
    "12": "모험",
    "16": "애니메이션",
    "35": "코미디",
    "80": "범죄",
    "99": "다큐멘터리",
    "10751": "가족",
    "14": "판타지",
    "36": "역사",
    "27": "공포",
    "10402": "음악",
    "9648": "미스터리",
    "10749": "로맨스",
    "878": "SF",
    "10770": "TV 영화",
    "53": "스릴러",
    "10752": "전쟁",
    "37": "서부",
    "10759": "액션 & 어드벤쳐",
    "18": "드라마",
    "10762": "키즈",
    "10763": "뉴스",
    "10764": "리얼리티",
    "10765": "SF & 판타지",
    "10766": "소프",
    "10767": "토크",
    "10768": "전쟁",
};
