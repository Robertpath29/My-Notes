import React, { FC } from "react";
import {
    ChatDisplayStyle,
    ChatStyle,
    GroupMessageUserStyle,
    GroupNameUserStyle,
    TextareaShatStyle,
    UserDisplayStyle,
    WriteTextGroupStyle,
} from "./chat.style";
import NotesInput from "../basic/input/NotesInput";
import NotesButton from "../basic/button/NotesButton";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { useAction } from "../../hooks/useAction";

const Chat = () => {
    const { displayChat, opacity } = useSelector(
        (store: reducersType) => store.chat
    );
    const { setDisplayBtnChat, setDisplayChat, setOpacity } = useAction();
    return (
        <ChatStyle
            id="chat"
            display={displayChat}
            opacity={opacity}
            onClick={() => {
                setOpacity({ opacity: 1 });
                console.log(1);
            }}
        >
            <GroupNameUserStyle id="groupNameUser">
                <NotesInput
                    type="text"
                    placeholder="user login"
                    id="inputUserLogin"
                />
                <NotesButton id="userLoginBtn" onClick={() => {}}>
                    +
                </NotesButton>
            </GroupNameUserStyle>
            <GroupMessageUserStyle id="groupMessageUser">
                <ChatDisplayStyle id="chatDisplay"></ChatDisplayStyle>
                <UserDisplayStyle id="userDisplay"></UserDisplayStyle>
            </GroupMessageUserStyle>
            <WriteTextGroupStyle id="writeTextGroup">
                <TextareaShatStyle
                    id="textareaShat"
                    spellCheck
                    rows={3}
                    cols={20}
                    placeholder="you message"
                />
                <NotesButton id="submit" onClick={() => {}}>
                    Submit
                </NotesButton>
            </WriteTextGroupStyle>
            <NotesButton
                id="closeChat"
                onClick={() => {
                    setDisplayChat({ displayChat: "none" });
                    setDisplayBtnChat({ displayBtnChat: "block" });
                }}
            >
                X
            </NotesButton>
        </ChatStyle>
    );
};

export default Chat;
