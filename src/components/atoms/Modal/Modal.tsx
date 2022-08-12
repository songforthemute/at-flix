import { useNavigate } from "react-router-dom";
import { genres, getImagePath } from "../../../libs";
import { InterfaceMovie } from "../../../apis/api";
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
    movidId: string;
    scrolly: number;
    data?: InterfaceMovie;
}

function Modal({ movidId, scrolly, data }: InterfaceModalProps) {
    console.log(data);
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
                layoutId={movidId}
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Cover
                    bg={getImagePath(
                        data?.backdrop_path! || data?.poster_path!,
                        "w500"
                    )}
                />
                <Container>
                    <Title>{data?.title || data?.name}</Title>
                    <Badges>
                        <Genres>
                            {data?.genre_ids.map((id) => (
                                <Genre key={id}>{genres[id]}</Genre>
                            ))}
                        </Genres>
                        <Votes>{data?.vote_average! * 10} / 100</Votes>
                    </Badges>
                    <Overview>{data?.overview}</Overview>
                </Container>
            </PopUp>
        </>
    );
}

export default Modal;
