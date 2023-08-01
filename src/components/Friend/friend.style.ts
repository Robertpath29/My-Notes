import styled from "styled-components";
export const FriendStyle = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    cursor: pointer;
    &:hover span {
        color: white;
    }
    &:hover button {
        opacity: 1;
    }
`;
export const NameStyle = styled.span<{ focus: string; login: string }>`
    position: relative;
    color: ${({ focus, login, theme }) =>
        focus === login ? "white" : theme.color.text};
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
        margin: 0px 0 0 5px;
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

export const NumberUnreadMessageStyle = styled.span<{
    numberUnreadMes: number;
}>`
    width: 15px;
    height: 15px;
    margin-bottom: 5px;
    margin-right: 2px;
    background-color: red;
    border-radius: 50%;
    color: white;
    display: ${({ numberUnreadMes }) =>
        numberUnreadMes === 0 ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
`;
