import styled from "styled-components";

export const ChatStyle = styled.div<{ display: string; opacity: number }>`
    width: 40%;
    z-index: 111;
    padding: 20px 20px 10px 20px;
    position: fixed;
    bottom: 20px;
    opacity: ${({ opacity }) => opacity};
    right: ${({ display }) => (display === `none` ? `-40%` : `20px`)};
    border: 2px solid black;
    border-radius: 20px 0 20px 0;
    background-color: ${({ theme }) => theme.color.main};
    transition: all 0.5s;
    & > :last-child {
        position: absolute;
        margin: 0;
        padding: 0;
        top: 5px;
        right: 10px;
        min-width: 0;
        border: none;
        background: none;
        font-size: 1.5rem;
    }
`;
export const GroupNameUserStyle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & > button {
        margin: 0 10px;
        padding: 0;
        height: max-content;
        max-width: max-content;
        min-width: 35px;
        width: 100%;

        font-size: 1.8rem;
        border-radius: 50%;
    }
`;
export const GroupMessageUserStyle = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;
export const TextareaShatStyle = styled.textarea`
    width: 100%;
    resize: none;
`;
export const ChatDisplayStyle = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px black inset;
`;
export const UserDisplayStyle = styled(ChatDisplayStyle)`
    padding-top: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WriteTextGroupStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
