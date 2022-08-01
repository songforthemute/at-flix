import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 5rem;
    top: 0;
    padding: 20px 60px;
    color: ${(props) => props.theme.white.lighter};
    background-color: ${(props) => props.theme.black.darkest};
`;

export const navVariants = {
    initial: {
        background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    },
    active: {
        background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
    },
};

export const Col = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled(motion.svg)`
    cursor: pointer;
    width: 72px;
    height: 54px;
    margin-right: 20px;
    fill: ${(props) => props.theme.yellow};
    path {
        /* stroke-width: 3px; */
        /* stroke: white; */
    }
`;

export const logoVariants: Variants = {
    initial: {
        rotateZ: 0,
        transition: {
            type: "spring",
            bounce: 0.95,
            duration: 3.5,
        },
    },
    active: {
        rotateZ: [0, -150, -45, -135, -60, -120, -75, -105, -95],
        transition: {
            // repeat: 2,
            type: "spring",
            bounce: 0.75,
            duration: 3.5,
        },
    },
};

export const Category = styled(motion.ul)`
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
`;

export const Item = styled(motion.li)`
    cursor: pointer;
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: color 0.3s ease-in-out;
    color: ${(props) => props.theme.white.darker};
    &:hover {
        color: ${(props) => props.theme.white.lighter};
    }
`;

export const Dot = styled(motion.span)`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    bottom: -6px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props) => props.theme.yellow};
`;

export const Search = styled.span`
    fill: ${(props) => props.theme.white.lighter};
    display: flex;
    align-items: center;
    position: relative;
    span {
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`;

export const searchVariants: Variants = {
    initial: {
        x: 0,
    },
    animate: (custom: boolean) => ({
        x: custom ? -140 : 0,
        transition: {
            duration: 0.3,
            type: "linear",
        },
    }),
};

export const Input = styled(motion.input)`
    transform-origin: right center;
    position: absolute;
    right: 0px;
    padding: 6px 10px;
    padding-left: 30px;
    z-index: -1;
    color: ${(props) => props.theme.white.lighter};
    font-size: 12px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.white.lighter};
    border-radius: 15px;
`;

export const inputVariants: Variants = {
    initial: {
        scaleX: 0,
    },
    animate: (custom: boolean) => ({
        scaleX: custom ? 1 : 0,
        transition: {
            duration: 0.3,
            // type: "tween",
            ease: "easeInOut",
        },
    }),
};
