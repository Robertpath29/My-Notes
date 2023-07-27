import styled from "styled-components";

export const GroupMessage = styled.div<{ position: string }>`
    justify-content: ${({ position }) =>
        position === "start" ? "start" : "end"};
    margin: ${({ position }) =>
        position === "start" ? "0px 40px 0px 5px" : "0px 5px 0px 40px"};
    padding: 3px 10px;
    align-items: center;
    display: ${({ position }) => (position ? "flex" : "none")};
`;

export const MessageStyle = styled.p<{ position: string }>`
    margin: 0;
    background-color: ${({ position }) =>
        position === "start" ? "lightblue" : "orange"};
    padding: 2px 15px;
    border-radius: 10px;
    word-break: break-all;
`;
