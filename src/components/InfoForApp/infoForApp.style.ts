import styled from "styled-components";

export const InfoForAppStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TextStyle = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.color.text};
`;
