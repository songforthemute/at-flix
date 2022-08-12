import { motion, Variants } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const PopUp = styled(motion.div)<{ scrolly: number }>`
    z-index: 100;
    position: absolute;
    width: 55vw;
    /* height: 60vh; */
    top: ${(props) => props.scrolly + 150}px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props) => props.theme.black.lighter};
    overflow: hidden;
    @media screen and (max-width: 768px) {
        width: 70vw;
        /* height: 65vh; */
        top: ${(props) => props.scrolly + 100}px;
    }
    @media screen and (max-width: 425px) {
        width: 85vw;
        /* height: 70vh; */
        top: ${(props) => props.scrolly + 100}px;
    }
`;

export const modalVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export const Cover = styled.div<{ bg: string }>`
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
        url(${(props) => props.bg});
    height: 400px;
    @media screen and (max-width: 768px) {
        height: 300px;
    }
    @media screen and (max-width: 425px) {
        height: 200px;
    }
`;

export const Container = styled.div`
    position: relative;
    top: -70px;
    margin: 20px;
    margin-bottom: 0;
`;

export const Title = styled.h2`
    color: ${(props) => props.theme.white.lighter};
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 30px;
`;

export const Overview = styled.p`
    color: ${(props) => props.theme.white.lighter};
    font-size: 14px;
`;

export const Badges = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Genres = styled.div``;

export const Genre = styled.span`
    display: inline-block;
    padding: 2px 3px;
    margin: 10px 2px;
    background-color: white;
    color: ${(props) => props.theme.black.darker};
    font-weight: 700;
    border-radius: 5px;
    transition: all 0.25s ease-in-out;
    &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.yellow};
    }
`;

export const Votes = styled.span`
    display: inline-block;
    padding: 2px 4px;
    background-color: white;
    color: ${(props) => props.theme.black.darker};
    font-weight: 700;
    border-radius: 5px;
`;
