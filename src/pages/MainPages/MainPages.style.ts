import styled from "styled-components";

export const MainPagesStyle = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.main};
`;
