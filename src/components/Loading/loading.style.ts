import styled from "styled-components";

export const LoadingStyle = styled.div`
    padding: 20px;
    max-width: 550px;
    width: 100%;
    text-align: center;
`;

export const ParentImg = styled.div<{ load?: number }>`
    width: 100%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0px;
        width: ${({ load }) => load + `%`};
        height: 100%;
        background-color: white;
    }
`;
export const Pencil = styled.img`
    width: 100%;
`;
export const LoadingText = styled.h1`
    position: relative;
    margin: 0;
    margin-top: 15px;
    padding: 0;
    font-size: 3rem;
`;
