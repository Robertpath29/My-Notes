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
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const Friend: FC<friendType> = ({
    friend,
    isVisibility,
    login,
    nameTableMessage,
}) => {
    const [online, isOnline] = useState(false);
    const { focusFriend } = useSelector((state: reducersType) => state.user);
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
            data-login={login}
            data-name_table_message={nameTableMessage}
        >
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
