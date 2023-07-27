import styled from "styled-components";
export const FriendStyle = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover span {
        color: white;
    }
    &:hover button {
        opacity: 1;
    }
`;
export const NameStyle = styled.span`
    color: ${({ theme }) => theme.color.text};
`;
export const OnlineStyle = styled.span<{ online: string }>`
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: ${({ online }) => (online === "true" ? "green" : "red")};
`;

export const GroupDeleteFriendStyle = styled.div`
    & > button {
        opacity: 0;
        cursor: pointer;
        margin: 0px 0 0 8px;
        padding: 0px;
        height: 0;
        min-width: 0;
        border: none;
        background: none;
        font-size: 1.1rem;
        color: black;
        &:hover {
            color: red;
        }
    }
`;
