import { useNavigate } from "react-router-dom";
import { genres, getImagePath, videoUrlConverter } from "../../../libs/libs";
import { getVideos, InterfaceGetVideos } from "../../../apis/searchApi";
import ReactPlayer from "react-player/lazy";
import {
    Cover,
    modalVariants,
    Overlay,
    PopUp,
    Title,
    Overview,
    DetialContainer,
    Genre,
    Badges,
    Genres,
    Votes,
} from "./style";
import { useQuery } from "@tanstack/react-query";
import { InterfaceMovie } from "../../../apis/movieApi";
import { InterfaceSeries } from "../../../apis/seriesApi";

interface InterfaceModalProps {
    programId: string;
    scrolly: number;
    movieData?: InterfaceMovie;
    seriesData?: InterfaceSeries;
}

export default function Modal({
    programId,
    scrolly,
    movieData,
    seriesData,
}: InterfaceModalProps) {
    const { data } = useQuery<InterfaceGetVideos>(
        movieData ? ["movies", `${programId}`] : ["series", `${programId}`],
        movieData
            ? () => getVideos("movie", programId)
            : () => getVideos("tv", programId)
    );

    const videoUrl = videoUrlConverter(data?.results[0]?.key);

    const navigate = useNavigate();
    const onClickOverlay = () => {
        navigate(-1);
    };

    return (
        <>
            <Overlay
                onClick={onClickOverlay}
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            />
            <PopUp
                scrolly={scrolly}
                layoutId={programId}
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {movieData ? (
                    // 무비 데이터 케이스
                    <>
                        {videoUrl ? (
                            <ReactPlayer
                                url={videoUrl}
                                width="auto"
                                volume={0.1}
                                playing={true}
                                controls={false}
                                light={true}
                            />
                        ) : (
                            <Cover
                                bg={getImagePath(
                                    movieData.backdrop_path! ||
                                        movieData.poster_path!,
                                    "w500"
                                )}
                            />
                        )}

                        <DetialContainer>
                            <Title>{movieData?.title}</Title>
                            <Badges>
                                <Genres>
                                    {movieData?.genre_ids.map((id) => (
                                        <Genre key={id}>{genres[id]}</Genre>
                                    ))}
                                </Genres>
                                <Votes>
                                    {movieData?.vote_average! * 10} / 100
                                </Votes>
                            </Badges>
                            <Overview>{movieData?.overview}</Overview>
                        </DetialContainer>
                    </>
                ) : (
                    // 시리즈 데이터 케이스
                    <>
                        {videoUrl ? (
                            <ReactPlayer
                                url={videoUrl}
                                width="auto"
                                volume={0.1}
                                playing={true}
                                controls={false}
                                light={true}
                            />
                        ) : (
                            <Cover
                                bg={getImagePath(
                                    seriesData!.backdrop_path! ||
                                        seriesData!.poster_path!,
                                    "w500"
                                )}
                            />
                        )}

                        <DetialContainer>
                            <Title>
                                {seriesData?.name || seriesData?.title}
                            </Title>
                            <Badges>
                                <Genres>
                                    {seriesData?.genre_ids.map((id) => (
                                        <Genre key={id}>{genres[id]}</Genre>
                                    ))}
                                </Genres>
                                <Votes>
                                    {seriesData?.vote_average! * 10} / 100
                                </Votes>
                            </Badges>
                            <Overview>{seriesData?.overview}</Overview>
                        </DetialContainer>
                    </>
                )}
            </PopUp>
        </>
    );
}
