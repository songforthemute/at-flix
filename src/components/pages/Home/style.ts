import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: black;
    height: 200vh;
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    text-align: center;
`;

export const Banner = styled.div<{ bg: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
        url(${(props) => props.bg});
    background-size: cover;
    @media screen and (max-width: 768px) {
        padding: 40px;
    }
    @media screen and (max-width: 425px) {
        height: 50vh;
        padding-top: 100px;
    }
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        margin-top: 40px;
        font-size: 48px;
    }
    @media screen and (max-width: 425px) {
        margin-top: 160px;
        font-size: 36px;
    }
`;

export const Overview = styled.p`
    color: ${(props) => props.theme.white.darker};
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.65;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    @media screen and (max-width: 425px) {
        font-size: 12px;
    }
`;
