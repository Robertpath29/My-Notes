import React, { FC, useCallback, useEffect, useState } from "react";
import {
    FriendStyle,
    GroupDeleteFriendStyle,
    NameStyle,
    NumberUnreadMessageStyle,
    OnlineStyle,
} from "./friend.style";
import { friendType } from "./friendType";
import axiosQuery, { GET_USER_URL } from "../../api/AxiosQuery";
import NotesButton from "../basic/button/NotesButton";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { numberUnreadMessage } from "../../utils/numberUnreadMessage";

const Friend: FC<friendType> = ({
    friend,
    isVisibility,
    login,
    nameTableMessage,
}) => {
    const [online, isOnline] = useState(false);
    const [numberUnreadMes, setNumberUnreadMes] = useState(0);
    const { focusFriend } = useSelector((state: reducersType) => state.user);
    const { arrayNameFriendsUnreadMessage } = useSelector(
        (state: reducersType) => state.webSocket
    );

    const getOnlineFriends = useCallback(async () => {
        const response = await axiosQuery.axiosQueryGet(
            { login: friend.login },
            GET_USER_URL
        );
        isOnline(Boolean(response.data.online));
    }, [friend.login]);

    useEffect(() => {
        getOnlineFriends();
    }, [getOnlineFriends]);

    useEffect(() => {
        numberUnreadMessage(
            arrayNameFriendsUnreadMessage,
            friend,
            setNumberUnreadMes
        );
    }, [arrayNameFriendsUnreadMessage]);

    return (
        <FriendStyle
            className="chat"
            data-login={login}
            data-name_table_message={nameTableMessage}
        >
            <NumberUnreadMessageStyle
                className="chat"
                numberUnreadMes={numberUnreadMes}
            >
                {numberUnreadMes}
            </NumberUnreadMessageStyle>
            <NameStyle
                className="chat"
                focus={focusFriend.focusStyle}
                login={login}
            >
                {friend.login}
            </NameStyle>

            <OnlineStyle className="chat" online={online.toString()} />
            <GroupDeleteFriendStyle
                className="chat"
                data-login={login}
                data-name_table_message={nameTableMessage}
            >
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
