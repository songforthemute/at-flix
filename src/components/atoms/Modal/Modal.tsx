import { useNavigate } from "react-router-dom";
import { genres, getImagePath } from "../../../libs";
import { InterfaceMovie, InterfaceSeries } from "../../../apis/api";
import {
    Cover,
    modalVariants,
    Overlay,
    PopUp,
    Title,
    Overview,
    Container,
    Genre,
    Badges,
    Genres,
    Votes,
} from "./style";

interface InterfaceModalProps {
    programId: string;
    scrolly: number;
    movieData?: InterfaceMovie;
    seriesData?: InterfaceSeries;
}

function Modal({
    programId,
    scrolly,
    movieData,
    seriesData,
}: InterfaceModalProps) {
    const navigate = useNavigate();
    function onClickOverlay() {
        navigate(-1);
    }

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
                        <Cover
                            bg={getImagePath(
                                movieData.backdrop_path! ||
                                    movieData.poster_path!,
                                "w500"
                            )}
                        />
                        <Container>
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
                        </Container>
                    </>
                ) : (
                    // 시리즈 데이터 케이스
                    <>
                        <Cover
                            bg={getImagePath(
                                seriesData!.backdrop_path! ||
                                    seriesData!.poster_path!,
                                "w500"
                            )}
                        />
                        <Container>
                            <Title>{seriesData?.name}</Title>
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
                        </Container>
                    </>
                )}
            </PopUp>
        </>
    );
}

export default Modal;
