import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Wrapper = styled.div`
    top: -150px;
    position: relative;
    height: auto;
    margin-bottom: 350px;
    @media screen and (min-width: 1024px) {
        margin-bottom: 500px;
    }
    @media screen and (max-width: 768px) {
        top: -100px;
        margin-bottom: 350px;
    }
    @media screen and (max-width: 425px) {
        top: 100px;
        margin-bottom: 200px;
    }
`;

export const RowTitle = styled.div`
    margin-left: 60px;
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`;

export const Row = styled(motion.div)<{ offset: number }>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.offset}, 1fr);
    gap: 5px;
    position: absolute;
    width: 100%;
`;

export const rowVariants: Variants = {
    initial: (isStraight: boolean) => ({
        x: isStraight ? window.innerWidth + 5 : -(window.innerWidth + 5),
        transition: {
            type: "spring",
            duration: 0.5,
        },
    }),
    animate: {
        x: 0,
        transition: {
            type: "spring",
            duration: 0.5,
        },
    },
    exit: (isStraight: boolean) => ({
        x: isStraight ? -(window.innerWidth + 5) : window.innerWidth + 5,
        transition: {
            type: "spring",
            duration: 0.5,
        },
    }),
};

export const Item = styled(motion.div)`
    background: transparent;
    cursor: pointer;
    /* relative 해제 시, width 늘어남 문제 발생! */
    position: relative;
    color: white;
    img {
        width: 100%;
    }
    &:last-child {
        transform-origin: center right;
    }
    &:first-child {
        transform-origin: center left;
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
        zIndex: 3,
        scale: 1.35,
        y: -50,
        transition: {
            type: "tween",
            duration: 0.5,
        },
    },
};

export const Detail = styled(motion.div)`
    padding: 10px;
    text-align: center;
    opacity: 0;
    /* background-color: ${(props) => props.theme.black.lighter}; */
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    position: absolute;
    width: 100%;
    bottom: 0;
    h3 {
        font-size: 10px;
        font-weight: 500;
    }
`;

export const detailVariants: Variants = {
    hover: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.35,
        },
    },
};

export const Button = styled.button<{ right?: string; left?: string }>`
    position: absolute;
    top: -10px;
    left: ${(props) => (props.left ? props.left : "initial")};
    right: ${(props) => (props.right ? props.right : "initial")};
    z-index: 2;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    margin: 0 5px;
    font-size: 40px;
    font-weight: 700;
    background-color: transparent;
    color: ${(props) => props.theme.black.lighter};
    transition: all 0.35s ease-in-out;
    &:hover,
    &:active {
        scale: 1.2;
        color: ${(props) => props.theme.white.lighter};
        box-shadow: inset 3px 3px 10px -5px rgba(255, 255, 255, 0.5),
            3px 3px 10px -5px rgba(255, 255, 255, 0.5);
    }
`;
