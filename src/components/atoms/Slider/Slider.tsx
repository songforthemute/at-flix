import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImagePath } from "../../../libs";
import { InterfaceMovie } from "../../../server/api";
import {
    Button,
    Detail,
    detailVariants,
    Item,
    itemVariants,
    Row,
    rowVariants,
    Wrapper,
} from "./style";

interface InterfaceSliderProps {
    data: InterfaceMovie[];
}

function Slider({ data }: InterfaceSliderProps) {
    const [idx, setIdx] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [isStraight, setIsStraight] = useState(true);

    const offset = 6;
    const maxIdx = Math.ceil(data.length / offset) - 1;

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onIncreaseIdx = () => {
        if (leaving) return;

        toggleLeaving();
        setIsStraight(true);
        setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
    };

    const onDecreaseIdx = () => {
        if (leaving) return;

        toggleLeaving();
        setIsStraight(false);
        setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
    };

    const navigate = useNavigate();
    const onClickItem = (programId: number) => {
        navigate(`/program/${programId}`);
    };

    console.log(idx);

    return (
        <Wrapper>
            <Button
                className="material-symbols-outlined"
                onClick={onDecreaseIdx}
            >
                arrow_left
            </Button>
            <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
                <Row
                    custom={isStraight}
                    variants={rowVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={idx}
                >
                    {data
                        .slice(offset * idx, offset * (idx + 1))
                        .map((program) => (
                            <Item
                                layoutId={program.id.toString()}
                                onClick={() => onClickItem(program.id)}
                                key={program.id}
                                variants={itemVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                <img
                                    src={getImagePath(
                                        program.backdrop_path,
                                        "w500"
                                    )}
                                    alt={program.title}
                                />
                                <Detail variants={detailVariants}>
                                    <h3>{program.title}</h3>
                                    <p>
                                        {program.overview.slice(0, 100) + "..."}
                                    </p>
                                    {/* 평가 등 */}
                                </Detail>
                            </Item>
                        ))}
                </Row>
            </AnimatePresence>
            <Button
                className="material-symbols-outlined"
                onClick={onIncreaseIdx}
            >
                arrow_right
            </Button>
        </Wrapper>
    );
}

export default Slider;
