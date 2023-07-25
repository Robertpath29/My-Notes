import styled from "styled-components";

export const GroupMessage = styled.div<{ position: string }>`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: ${({ position }) => position};
`;

export const MessageStyle = styled.p`
    margin: 0;
`;
