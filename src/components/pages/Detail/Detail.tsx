import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player/lazy";
import { useMatch } from "react-router-dom";
import {
    getDetail,
    getVideos,
    InterfaceGetResult,
    InterfaceGetVideos,
} from "../../../apis/searchApi";
import {
    getImagePath,
    isNotMobile,
    videoUrlConverter,
} from "../../../libs/libs";
import { Genre, Genres, Votes } from "../../atoms/Modal/style";
import { Container, Dating, Overview, Title, Wrapper } from "./style";

export default function Detail() {
    const match = useMatch(`/search/:type/:id`);

    const { data, isLoading } = useQuery<InterfaceGetResult>(
        ["search", `${match?.params.id}`],
        () => getDetail(match?.params.type!, Number(match?.params.id))
    );

    const { data: videoData } = useQuery<InterfaceGetVideos>(
        match?.params.type! === "movie"
            ? ["movies", `${match?.params.id}`]
            : ["series", `${match?.params.id}`],
        match?.params.type! === "movie"
            ? () => getVideos("movie", match?.params.id!)
            : () => getVideos("tv", match?.params.id!)
    );

    const videoUrl = videoUrlConverter(videoData?.results[0]?.key);

    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : (
                <Wrapper
                    bg={getImagePath(data?.backdrop_path! || "", "original")}
                >
                    <Container>
                        <img
                            src={getImagePath(
                                data?.poster_path! || data?.backdrop_path!,
                                "w500"
                            )}
                            alt=""
                        />
                    </Container>
                    <Container>
                        {videoUrl ? (
                            <ReactPlayer
                                url={videoUrl}
                                width="auto"
                                height={isNotMobile() ? undefined : "250px"}
                                volume={0.1}
                                playing={true}
                                controls={true}
                            />
                        ) : null}
                        <Title>{data?.title || data?.name}</Title>
                        <Dating>
                            {data?.release_date || data?.first_air_date}
                        </Dating>
                        <Genres>
                            장르 :
                            {data?.genres.map((g) => (
                                <Genre key={g.id}>{g.name}</Genre>
                            ))}
                        </Genres>
                        <div>
                            평가 : <Votes>{data?.vote_average!} / 10.00</Votes>
                        </div>
                        <Overview>{data?.overview}</Overview>
                    </Container>
                </Wrapper>
            )}
        </>
    );
}
