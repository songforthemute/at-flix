import styled from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 35px;
`;

export const Container = styled.div`
    margin: 5px auto;
`;

export const ReturnBtn = styled.button`
    width: 45px;
    height: 45px;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.white.darker};
    transition: all 0.25s;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
        scale: 1.5;
        color: ${(props) => props.theme.yellow};
    }

    &:focus {
        outline: none;
    }
`;

export const Copy = styled.div`
    text-align: center;
    padding: 4px 0;
    color: ${(props) => props.theme.white.darker};
`;
