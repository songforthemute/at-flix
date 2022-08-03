import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Wrapper = styled.div`
    top: -100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 20px;
    font-size: 40px;
    font-weight: 800;
    background-color: transparent;
    color: white;
    margin: 0 10px;
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active {
        background-color: rgba(255, 255, 255, 0.3);
        /* color: ${(props) => props.theme.black.darkest}; */
        box-shadow: inset 3px 3px 10px -5px rgba(0, 0, 0, 0.9),
            3px 3px 10px -5px rgba(0, 0, 0, 0.9);
    }
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    position: absolute;
    width: 80vw;
    left: 0;
    right: 0;
    margin: 0 auto;
`;

export const rowVariants: Variants = {
    initial: (isStraight: boolean) => ({
        x: isStraight ? window.innerWidth + 10 : -window.innerWidth - 10,
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
    exit: (isStraight: boolean) => ({
        x: isStraight ? -window.innerWidth - 10 : window.innerWidth + 10,
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    }),
};

export const Item = styled(motion.div)`
    cursor: pointer;
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
