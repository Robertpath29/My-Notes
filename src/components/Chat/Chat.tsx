import React, { FC, useEffect, useState } from "react";
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
import axiosQuery, { ADD_FRIEND_URL, GET_USER_URL } from "../../api/AxiosQuery";
import WarningMessage from "../basic/warning_message/WarningMessage";
import { chatType } from "./chatType";
import Friend from "../Friend/Friend";

const Chat: FC<chatType> = ({ getFriends, myFriends, setMyFriends }) => {
    const { displayChat, opacity } = useSelector(
        (store: reducersType) => store.chat
    );

    const { id, login } = useSelector((state: reducersType) => state.user);
    const [warning, isWarning] = useState({ war: false, message: "" });
    const [nameFriend, setNameFriend] = useState({ login: "" });
    const { setDisplayBtnChat, setDisplayChat, setOpacity } = useAction();

    async function addFriend() {
        const friendDB = await axiosQuery.axiosQueryGet(
            { login: nameFriend.login },
            GET_USER_URL
        );
        if (friendDB.data.length === 0) {
            isWarning({ war: true, message: "User not found" });
            return;
        }
        if (friendDB.data.login === login) {
            isWarning({ war: true, message: "It's you!" });
            return;
        }
        const friend = {
            myId: id,
            myLogin: login,
            friendId: friendDB.data.id,
            friendLogin: friendDB.data.login,
        };
        const response = await axiosQuery.axiosQueryPost(
            friend,
            ADD_FRIEND_URL
        );

        if (response.data.message === "The user is your friend") {
            isWarning({ war: true, message: response.data.message });
            return;
        }

        if (response.data.message === "friends ready") {
            setNameFriend({ ...nameFriend, login: "" });
            getFriends();
        }
    }
    useEffect(() => {
        getFriends();
    }, [getFriends]);
    return (
        <ChatStyle
            id="chat"
            display={displayChat}
            opacity={opacity}
            onClick={() => {
                setOpacity({ opacity: 1 });
            }}
        >
            <GroupNameUserStyle id="groupNameUser">
                <NotesInput
                    onChange={(e) => {
                        setNameFriend({ ...nameFriend, login: e.target.value });
                        isWarning({ war: false, message: "" });
                    }}
                    value={nameFriend.login}
                    type="text"
                    placeholder="user login"
                    id="inputUserLogin"
                />
                <NotesButton
                    id="userLoginBtn"
                    onClick={() => {
                        addFriend();
                    }}
                >
                    +
                </NotesButton>
                <WarningMessage none={warning.war}>
                    {warning.message}
                </WarningMessage>
            </GroupNameUserStyle>
            <GroupMessageUserStyle id="groupMessageUser">
                <ChatDisplayStyle id="chatDisplay"></ChatDisplayStyle>
                <UserDisplayStyle id="userDisplay">
                    {myFriends.map((friend) => (
                        <Friend friend={friend} key={friend.id} />
                    ))}
                </UserDisplayStyle>
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
                    isWarning({ war: false, message: "" });
                }}
            >
                X
            </NotesButton>
        </ChatStyle>
    );
};

export default Chat;
