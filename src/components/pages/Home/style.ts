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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
        url(${(props) => props.bg});
    background-size: cover;
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const Overview = styled.p`
    font-size: 20px;
    font-weight: 300;
`;
