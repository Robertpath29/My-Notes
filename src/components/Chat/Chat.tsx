import React, { FC, useEffect, useRef, useState } from "react";
import {
    ChatDisplayStyle,
    ChatStyle,
    GroupBtnOldMessage,
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
import { addFriend } from "../../api/addFriends";
import { scrollToNewMessage } from "../../utils/scrollToNewMessage";
import Confirm from "../Confirm/Confirm";
import { deleteFriend } from "../../api/deleteFriends";
import { useGetFriends } from "../../hooks/useGetFriends";
import { useSubmitMessage } from "../../hooks/useSubmitMessage";
import { getFriendMessage } from "../../api/getFriendMessage";
import { deleteUnreadMessage } from "../../api/deleteUnreadMessage";
import { getOldMessage } from "../../api/getOldMessage";

const Chat: FC<chatType> = () => {
    const { id, login, myFriends, focusFriend } = useSelector(
        (store: reducersType) => store.user
    );
    const { displayChat, opacity } = useSelector(
        (store: reducersType) => store.chat
    );
    const { messageDisplay, numberLoadingMessage } = useSelector(
        (store: reducersType) => store.webSocket
    );
    const [visibility, isVisibility] = useState(false);

    const displayMessageRef = useRef<HTMLDivElement | null>(null);
    const [nameFriend, setNameFriend] = useState({ login: "" });
    const {
        setDisplayBtnChat,
        setDisplayChat,
        setOpacity,
        setNewFriend,
        setFocusFriend,
        setMessageDisplay,
        setFocusStyle,
        clearMessageDisplay,
        setArrayNameFriendsUnreadMessage,
        ClearNumberLoadingMessage,
        setNumberLoadingMessage,
    } = useAction();
    const { getFriends } = useGetFriends();
    const { submitMessage, warning, isWarning, setMyMessage, myMessage } =
        useSubmitMessage(focusFriend);

    function confirmDeleteFriend() {
        isVisibility(false);
        deleteFriend(
            focusFriend.name,
            login,
            getFriends,
            setNewFriend,
            id,
            focusFriend
        );
        setFocusFriend({ name: "", nameTableMessage: "" });
        clearMessageDisplay();
    }
    function cancelDeleteFriend() {
        isVisibility(false);
    }

    useEffect(() => {
        deleteUnreadMessage(
            focusFriend.name,
            login,
            setArrayNameFriendsUnreadMessage
        );
    }, [focusFriend.name]);
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
                        {messageDisplay.length > numberLoadingMessage - 1 && (
                            <GroupBtnOldMessage>
                                <NotesButton
                                    className="chat"
                                    onClick={() => {
                                        getOldMessage(
                                            focusFriend,
                                            numberLoadingMessage,
                                            setNumberLoadingMessage,
                                            clearMessageDisplay,
                                            setMessageDisplay
                                        );
                                    }}
                                >
                                    Get old message
                                </NotesButton>
                            </GroupBtnOldMessage>
                        )}
                        {messageDisplay.map((mes, index) => (
                            <Message message={mes} key={index} />
                        ))}
                    </ChatDisplayStyle>
                    <UserDisplayStyle
                        className="chat"
                        onClick={(e) => {
                            getFriendMessage(
                                e,
                                setFocusFriend,
                                setMessageDisplay,
                                setFocusStyle,
                                clearMessageDisplay,
                                numberLoadingMessage,
                                ClearNumberLoadingMessage,
                                focusFriend
                            );
                        }}
                    >
                        {myFriends.map((friend) => (
                            <Friend
                                friend={friend}
                                isVisibility={isVisibility}
                                key={friend.id}
                                login={friend.login}
                                nameTableMessage={friend.table_message_name}
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
                        setFocusFriend({ name: "", nameTableMessage: "" });
                        clearMessageDisplay();
                    }}
                >
                    X
                </NotesButton>
            </ChatStyle>
            {visibility && (
                <Confirm
                    message={`Delete friend ${focusFriend.name}`}
                    onConfirm={confirmDeleteFriend}
                    onCancel={cancelDeleteFriend}
                />
            )}
        </>
    );
};

export default Chat;
