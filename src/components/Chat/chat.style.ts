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
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        width: 100%;
        bottom: 0;
        top: 0;
        right: ${({ display }) => (display === `none` ? `-100%` : `0px`)};
        border-radius: 0;
        overflow: auto;
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
        @media (max-width: ${({ theme }) => theme.size.tablet}) {
            font-size: 1rem;
            min-width: 20px;
        }
    }
`;
export const GroupMessageUserStyle = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        height: 500px;
        flex-direction: column-reverse;
        justify-content: start;
    }
`;
export const TextareaShatStyle = styled.textarea`
    width: 100%;
    resize: none;
    border-radius: 10px;
`;
export const ChatDisplayStyle = styled.div`
    padding: 10px 0;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px black inset;
    overflow: auto;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        height: 500px;
    }
`;
export const UserDisplayStyle = styled(ChatDisplayStyle)`
    padding-top: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        font-size: 0.8rem;
        width: 100%;
        height: max-content;
    }
`;

export const WriteTextGroupStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GroupBtnOldMessage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    & > button {
        margin: 0;
        padding: 2px;
        font-size: 0.6rem;
        height: max-content;
    }
`;
