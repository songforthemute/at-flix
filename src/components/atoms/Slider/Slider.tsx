import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImagePath, isMobile, programTypes } from "../../../libs";
import { InterfaceMovie } from "../../../apis/api";
import {
    Button,
    Detail,
    detailVariants,
    Item,
    itemVariants,
    Row,
    RowTitle,
    rowVariants,
    Wrapper,
} from "./style";

interface InterfaceSliderProps {
    data: InterfaceMovie[];
    sliderTitle: string;
    type: programTypes;
}

export default function Slider({
    data,
    sliderTitle,
    type,
}: InterfaceSliderProps) {
    const [idx, setIdx] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [isStraight, setIsStraight] = useState(true);

    const offset = isMobile() ? 6 : 4;
    const maxIdx = Math.ceil(data.length / offset) - 1;

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onIncreaseIdx = () => {
        if (leaving) return;

        setIsStraight(true);
        toggleLeaving();
        setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
    };

    const onDecreaseIdx = () => {
        if (leaving) return;

        setIsStraight(false);
        toggleLeaving();
        setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
    };

    const navigate = useNavigate();
    const onClickItem = (movieId: number) => {
        navigate(`/${type}/${movieId}`);
    };

    return (
        <Wrapper>
            <Button
                className="material-symbols-outlined"
                onClick={onDecreaseIdx}
                left="0px"
            >
                arrow_left
            </Button>
            <Button
                className="material-symbols-outlined"
                onClick={onIncreaseIdx}
                right="0px"
            >
                arrow_right
            </Button>
            <RowTitle>{sliderTitle}</RowTitle>
            <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
                <Row
                    offset={offset}
                    custom={isStraight}
                    variants={rowVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={idx}
                >
                    {data
                        .slice(offset * idx, offset * (idx + 1))
                        .map((movie) => (
                            <Item
                                layoutId={movie.id.toString()}
                                onClick={() => onClickItem(movie.id)}
                                key={movie.id}
                                variants={itemVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                <img
                                    src={getImagePath(
                                        movie.backdrop_path ||
                                            movie.poster_path,
                                        "w500"
                                    )}
                                    alt={movie.title}
                                />
                                <Detail variants={detailVariants}>
                                    <h3>{movie.title || movie.name}</h3>
                                </Detail>
                            </Item>
                        ))}
                </Row>
            </AnimatePresence>
        </Wrapper>
    );
}
