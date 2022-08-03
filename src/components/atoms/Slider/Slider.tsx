import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImagePath } from "../../../libs";
import { InterfaceMovie } from "../../../server/api";
import {
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

    const offset = 6;
    const maxIdx = Math.ceil(data.length / offset) - 1;

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onIncreaseIdx = () => {
        if (leaving) return;

        toggleLeaving();
        setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
    };

    const navigate = useNavigate();
    const onClickItem = (programId: number) => {
        navigate(`/program/${programId}`);
    };

    /**
     * 왼쪽 클릭시 왼쪽으로 이동
     * 오른쪽 클릭시 오른쪽으로 이동 버튼
     */

    return (
        <Wrapper onClick={onIncreaseIdx}>
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
        </Wrapper>
    );
}

export default Slider;
