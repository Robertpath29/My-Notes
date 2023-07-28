import React, { FC, useEffect, useRef, useState } from "react";
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
import WarningMessage from "../basic/warning_message/WarningMessage";
import { chatType } from "./chatType";
import Friend from "../Friend/Friend";
import Message from "../Message/Message";
import { addFriend } from "../../utils/addFriends";
import { scrollToNewMessage } from "../../utils/scrollToNewMessage";
import Confirm from "../Confirm/Confirm";
import { deleteFriend } from "../../utils/deleteFriends";
import { useGetFriends } from "../../hooks/useGetFriends";

const Chat: FC<chatType> = () => {
    const { displayChat, opacity } = useSelector(
        (store: reducersType) => store.chat
    );

    const { id, login, myFriends, focusFriend } = useSelector(
        (state: reducersType) => state.user
    );
    const { messageDisplay } = useSelector(
        (state: reducersType) => state.webSocket
    );
    const [visibility, isVisibility] = useState(false);

    const displayMessageRef = useRef<HTMLDivElement | null>(null);
    const [warning, isWarning] = useState({ war: false, message: "" });
    const [nameFriend, setNameFriend] = useState({ login: "" });
    const [myMessage, setMyMessage] = useState("");
    const {
        setDisplayBtnChat,
        setDisplayChat,
        setOpacity,
        setWhom,
        setNewFriend,
        setFocusFriend,
    } = useAction();
    const { getFriends } = useGetFriends();
    function submitMessage() {
        if (focusFriend === "") {
            isWarning({ war: true, message: "Сhoose a friend!" });
            return;
        }
        if (myMessage === "") return;
        isWarning({ war: false, message: "" });
        setWhom({ fromWhom: login, whom: focusFriend, message: myMessage });
        setMyMessage("");
    }

    function confirmDeleteFriend() {
        isVisibility(false);
        deleteFriend(focusFriend, login, getFriends, setNewFriend, id);
        setFocusFriend("");
    }
    function cancelDeleteFriend() {
        isVisibility(false);
    }
    useEffect(() => {
        getFriends();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            scrollToNewMessage(displayMessageRef);
        });
    }, [messageDisplay]);
    return (
        <>
            <ChatStyle
                className="chat"
                display={displayChat}
                opacity={opacity}
                onClick={() => {
                    setOpacity({ opacity: 1 });
                }}
            >
                <GroupNameUserStyle className="chat">
                    <NotesInput
                        onChange={(e) => {
                            setNameFriend({
                                ...nameFriend,
                                login: e.target.value,
                            });
                            isWarning({ war: false, message: "" });
                        }}
                        value={nameFriend.login}
                        type="text"
                        placeholder="user login"
                        className="chat"
                    />
                    <NotesButton
                        className="chat"
                        onClick={() => {
                            addFriend(
                                nameFriend,
                                isWarning,
                                login,
                                setNameFriend,
                                getFriends,
                                id,
                                setNewFriend
                            );
                        }}
                    >
                        +
                    </NotesButton>
                    <WarningMessage none={warning.war}>
                        {warning.message}
                    </WarningMessage>
                </GroupNameUserStyle>
                <GroupMessageUserStyle className="chat">
                    <ChatDisplayStyle ref={displayMessageRef} className="chat">
                        {messageDisplay.map((mes, index) => (
                            <Message position={mes.fromWhom} key={index}>
                                {mes.message}
                            </Message>
                        ))}
                    </ChatDisplayStyle>
                    <UserDisplayStyle className="chat">
                        {myFriends.map((friend) => (
                            <Friend
                                friend={friend}
                                isVisibility={isVisibility}
                                key={friend.id}
                            />
                        ))}
                    </UserDisplayStyle>
                </GroupMessageUserStyle>
                <WriteTextGroupStyle className="chat">
                    <TextareaShatStyle
                        className="chat"
                        spellCheck
                        rows={3}
                        cols={20}
                        placeholder="you message"
                        value={myMessage}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                e.preventDefault();
                                submitMessage();
                            }
                        }}
                        onChange={(e) => {
                            setMyMessage(e.target.value);
                            isWarning({ war: false, message: "" });
                        }}
                    />
                    <NotesButton
                        className="chat"
                        onClick={() => {
                            submitMessage();
                        }}
                    >
                        Submit
                    </NotesButton>
                </WriteTextGroupStyle>
                <NotesButton
                    className="chat"
                    onClick={() => {
                        setDisplayChat({ displayChat: "none" });
                        setDisplayBtnChat({ displayBtnChat: "block" });
                        isWarning({ war: false, message: "" });
                    }}
                >
                    X
                </NotesButton>
            </ChatStyle>
            {visibility && (
                <Confirm
                    message={`Delete friend ${focusFriend}`}
                    onConfirm={confirmDeleteFriend}
                    onCancel={cancelDeleteFriend}
                />
            )}
        </>
    );
};

export default Chat;
