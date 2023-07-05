import styled from "styled-components";

export const StartPagesLoadingStyle = styled.div`
    padding: 20px;
    max-width: 550px;
    width: 100%;
    text-align: center;
`;

export const LoadingTextStyle = styled.h1`
    position: relative;
    margin: 0;
    margin-top: 15px;
    padding: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.main};
`;
