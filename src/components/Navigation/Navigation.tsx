import React, { FC } from "react";
import { ChatContainerBtn, NavigationStyle } from "./navigation.style";
import { NumberUnreadMessageStyle } from "../Friend/friend.style";
import NotesButton from "../basic/button/NotesButton";
import { useGetFriends } from "../../hooks/useGetFriends";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { navigateType } from "./navigationType";

const Navigation: FC<navigateType> = ({
    fnBtnNewNote,
    fnBtnOptions,
    nameBtnNewNote,
    nameBtnOptions,
    numberUnreadMes,
}) => {
    const { getFriends } = useGetFriends();
    const { displayBtnChat } = useSelector((store: reducersType) => store.chat);
    const { visibilityConfirm, setDisplayBtnChat, setDisplayChat } =
        useAction();
    return (
        <NavigationStyle>
            <ChatContainerBtn display={displayBtnChat}>
                <NumberUnreadMessageStyle numberUnreadMes={numberUnreadMes}>
                    {numberUnreadMes}
                </NumberUnreadMessageStyle>
                <NotesButton
                    id="openChat"
                    onClick={() => {
                        setDisplayChat({ displayChat: "visibility" });
                        setDisplayBtnChat({ displayBtnChat: "none" });
                        getFriends();
                    }}
                >
                    Chat
                </NotesButton>
            </ChatContainerBtn>
            <NotesButton onClick={fnBtnNewNote}>{nameBtnNewNote}</NotesButton>
            <NotesButton onClick={fnBtnOptions}>{nameBtnOptions}</NotesButton>
            <NotesButton
                onClick={() => {
                    visibilityConfirm({ visibility: true });
                    setDisplayChat({ displayChat: "none" });
                    setDisplayBtnChat({ displayBtnChat: "block" });
                }}
            >
                Exit
            </NotesButton>
        </NavigationStyle>
    );
};

export default Navigation;
