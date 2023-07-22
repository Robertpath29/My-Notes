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
    const { displayChat } = useSelector((store: reducersType) => store.chat);
    const { setDisplayBtnChat, setDisplayChat } = useAction();
    return (
        <ChatStyle display={displayChat}>
            <GroupNameUserStyle>
                <NotesInput type="text" placeholder="user login" />
                <NotesButton onClick={() => {}}>+</NotesButton>
            </GroupNameUserStyle>
            <GroupMessageUserStyle>
                <ChatDisplayStyle></ChatDisplayStyle>
                <UserDisplayStyle></UserDisplayStyle>
            </GroupMessageUserStyle>
            <WriteTextGroupStyle>
                <TextareaShatStyle
                    spellCheck
                    rows={3}
                    cols={20}
                    placeholder="you message"
                />
                <NotesButton onClick={() => {}}>Submit</NotesButton>
            </WriteTextGroupStyle>
            <NotesButton
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
