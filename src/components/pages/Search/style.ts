import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Wrapper = styled.div`
    padding: 60px;
    margin-top: 40px;
    background-color: black;
    display: flex;
    justify-content: center;
    /* align-items: center; */
`;

export const Results = styled.div<{ isMobile: boolean }>`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => (props.isMobile ? "4" : "2")},
        1fr
    );
    gap: 15px;
    row-gap: 40px;
`;

export const Result = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    span {
        margin: 10px auto;
        display: inline-block;
        text-align: center;
    }
    img {
        width: auto;
        @media screen and (max-width: 768px) {
            height: 400px;
        }
        @media screen and (max-width: 425px) {
            height: 200px;
        }
    }
`;

export const resultVariants: Variants = {
    initial: {},
    animate: {
        cursor: "pointer",
        scale: 1.1,
        fontWeight: 500,
        color: "#FFDE03",
        transition: {
            type: "tween",
        },
    },
};
