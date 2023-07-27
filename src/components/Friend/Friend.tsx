import React, { FC, useCallback, useEffect, useState } from "react";
import { FriendStyle, NameStyle, OnlineStyle } from "./friend.style";
import { friendType } from "./friendType";
import axiosQuery, { GET_USER_URL } from "../../api/AxiosQuery";

const Friend: FC<friendType> = ({ friend, setLoginFriend }) => {
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
        </FriendStyle>
    );
};

export default Friend;
