import React, { FC, useCallback, useEffect, useState } from "react";
import {
    FriendStyle,
    GroupDeleteFriendStyle,
    NameStyle,
    OnlineStyle,
} from "./friend.style";
import { friendType } from "./friendType";
import axiosQuery, { GET_USER_URL } from "../../api/AxiosQuery";
import NotesButton from "../basic/button/NotesButton";

const Friend: FC<friendType> = ({ friend, isVisibility, setLoginFriend }) => {
    const [online, isOnline] = useState(false);
    const getOnlineFriends = useCallback(async () => {
        const response = await axiosQuery.axiosQueryGet(
            { login: friend.login },
            GET_USER_URL
        );
        isOnline(response.data.online);
    }, [friend.login]);
    useEffect(() => {
        getOnlineFriends();
    }, [getOnlineFriends]);
    return (
        <FriendStyle
            className="chat"
            onClick={() => {
                setLoginFriend(friend.login);
            }}
        >
            <NameStyle className="chat">{friend.login}</NameStyle>
            <OnlineStyle className="chat" online={online.toString()} />
            <GroupDeleteFriendStyle className="chat">
                <NotesButton
                    className="chat"
                    onClick={() => {
                        isVisibility(true);
                    }}
                >
                    X
                </NotesButton>
            </GroupDeleteFriendStyle>
        </FriendStyle>
    );
};

export default Friend;
