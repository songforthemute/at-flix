import { useNavigate } from "react-router-dom";
import { getImagePath } from "../../../libs";
import { InterfaceMovie } from "../../../server/api";
import {
    Cover,
    modalVariants,
    Overlay,
    PopUp,
    Title,
    Overview,
    Container,
} from "./style";

interface InterfaceModalProps {
    programId: string;
    scrolly: number;
    data?: InterfaceMovie;
}

function Modal({ programId, scrolly, data }: InterfaceModalProps) {
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
                <Cover bg={getImagePath(data?.backdrop_path!, "w500")} />
                <Container>
                    <Title>{data?.title}</Title>
                    <Overview>{data?.overview}</Overview>
                </Container>
            </PopUp>
        </>
    );
}

export default Modal;
