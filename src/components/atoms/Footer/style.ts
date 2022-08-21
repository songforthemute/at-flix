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
    border-radius: 80px;
    width: 45px;
    height: 45px;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.white.darker};
    transition: all 0.35s ease-in-out;
    cursor: pointer;
    &:hover,
    &:active {
        scale: 1.2;
        color: ${(props) => props.theme.white.lighter};
        box-shadow: inset 3px 3px 10px -5px rgba(255, 255, 255, 0.5),
            3px 3px 10px -5px rgba(255, 255, 255, 0.5);
    }
`;

export const Copy = styled.div`
    text-align: center;
    color: ${(props) => props.theme.black.lighter};
`;
