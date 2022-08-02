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
            duration: 0.5,
        },
    },
    exit: {
        x: -window.innerWidth - 10,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};

export const Item = styled(motion.div)`
    height: 100%;
    position: relative; /* relative 해제 시, width 늘어남 문제 발생! */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child {
        transform-origin: center right;
    }
    &:first-child {
        transform-origin: center left;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

export const itemVariants: Variants = {
    initial: {
        scale: 1,
        zIndex: 0,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
    hover: {
        zIndex: 1,
        scale: 1.5,
        y: -75,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};

export const Detail = styled(motion.div)`
    padding: 10px;
    opacity: 0;
    background-color: ${(props) => props.theme.black.lighter};
    position: absolute;
    width: 100%;
    bottom: -35px;
    h3 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    p {
        font-size: 10px;
    }
`;

export const detailVariants: Variants = {
    hover: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};
