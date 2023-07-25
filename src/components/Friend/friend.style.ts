import styled from "styled-components";

export const FriendStyle = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    & > :hover {
        color: white;
    }
`;
export const NameStyle = styled.span`
    color: ${({ theme }) => theme.color.text};
`;
export const OnlineStyle = styled.div<{ online: string }>`
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: ${({ online }) => (online === "true" ? "green" : "red")};
`;
