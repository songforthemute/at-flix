import styled from "styled-components";

export const Wrapper = styled.div<{ bg: string }>`
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)),
        url(${(props) => props.bg});
    padding: 100px 60px;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media screen and (max-width: 425px) {
        padding: 100px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
    padding: 10px;
    margin: 0 auto;
    img {
        width: auto;
        @media screen and (max-width: 768px) {
            height: 450px;
        }
        @media screen and (max-width: 375px) {
            height: 400px;
        }
    }
`;

export const Title = styled.h2`
    margin: 10px auto;
    margin-top: 20px;
    /* margin-bottom: 10px; */
    font-weight: 700;
    font-size: 28px;
    @media screen and (max-width: 425px) {
        font-size: 24px;
        margin-top: 0;
    }
`;

export const Dating = styled.div`
    font-style: italic;
    margin-bottom: 15px;
`;

export const Overview = styled.p`
    margin: 20px 0;
    font-size: 16px;
    line-height: 1.65;
    @media screen and (max-width: 425px) {
        font-size: 14px;
    }
`;
