import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Wrapper = styled.div`
    top: -100px;
    position: relative;
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    position: absolute;
    width: 100%;
`;

export const rowVariants: Variants = {
    initial: {
        x: window.innerWidth + 10,
    },
    animate: {
        x: 0,
        transition: {
            type: "tween",
            duration: 1,
        },
    },
    exit: {
        x: -window.innerWidth - 10,
        transition: {
            type: "tween",
            duration: 1,
        },
    },
};

export const Item = styled(motion.div)<{ bg: string }>`
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    height: 200px;
    font-size: 24px;
    color: black;
    font-weight: 700;
    text-align: center;
    color: white;
    border-radius: 10px;
`;
