import React, { FC, useCallback, useEffect, useState } from "react";
import { FriendStyle, NameStyle, OnlineStyle } from "./friend.style";
import { friendType } from "./friendType";
import axiosQuery, { GET_USER_URL } from "../../api/AxiosQuery";

const Friend: FC<friendType> = ({ friend }) => {
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
        <FriendStyle>
            <NameStyle>{friend.login}</NameStyle>
            <OnlineStyle online={online.toString()} />
        </FriendStyle>
    );
};

export default Friend;
