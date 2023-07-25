import React, { FC, useCallback, useEffect, useState } from "react";
import { FriendStyle, NameStyle, OnlineStyle } from "./friend.style";
import { friendType } from "./friendType";
import axiosQuery, { GET_USER_URL } from "../../api/AxiosQuery";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const Friend: FC<friendType> = ({ friend }) => {
    const [online, isOnline] = useState(false);
    const { login } = useSelector((state: reducersType) => state.user);
    const getOnlineFriends = useCallback(async () => {
        const response = await axiosQuery.axiosQueryGet(
            { login: friend.login },
            GET_USER_URL
        );
        isOnline(response.data.online);
    }, [friend.login]);
    const { setWhom } = useAction();
    useEffect(() => {
        getOnlineFriends();
    }, [getOnlineFriends]);
    return (
        <FriendStyle
            onClick={() => {
                setWhom({ fromWhom: login, whom: friend.login });
            }}
        >
            <NameStyle>{friend.login}</NameStyle>
            <OnlineStyle online={online.toString()} />
        </FriendStyle>
    );
};

export default Friend;
