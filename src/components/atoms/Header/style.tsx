import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 5rem;
    top: 0;
    background-color: azure;
`;

export const Col = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.svg`
    margin-right: 50px;
`;

export const Category = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Item = styled.li`
    cursor: pointer;
    margin-right: 20px;
`;

export const Btn = styled.button``;
