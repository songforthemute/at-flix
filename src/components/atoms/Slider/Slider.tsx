import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getImagePath } from "../../../libs";
import { InterfaceMovie } from "../../../server/api";
import { Item, Row, rowVariants, Wrapper } from "./style";

interface InterfaceSliderProps {
    data: InterfaceMovie[];
}

function Slider({ data }: InterfaceSliderProps) {
    const [idx, setIdx] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const offset = 6;
    const maxIdx = Math.ceil(data.length / offset) - 1;

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const increaseIdx = () => {
        if (leaving) return;

        toggleLeaving();
        setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
    };

    return (
        <Wrapper onClick={increaseIdx}>
            <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
                <Row
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
                                key={movie.id}
                                bg={getImagePath(movie.backdrop_path, "w500")}
                            >
                                {movie.title}
                            </Item>
                        ))}
                </Row>
            </AnimatePresence>
        </Wrapper>
    );
}

export default Slider;
