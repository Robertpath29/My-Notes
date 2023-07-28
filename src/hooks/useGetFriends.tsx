import { useSelector } from "react-redux";
import axiosQuery, { ADD_FRIEND_URL } from "../api/AxiosQuery";
import { reducersType } from "../redux/combineReducers/combineReducers";
import { useAction } from "./useAction";
import React from "react";

export const useGetFriends = () => {
    const { id } = useSelector((state: reducersType) => state.user);
    const { pushMyFriends } = useAction();
    async function getFriends() {
        const friends = await axiosQuery.axiosQueryGet(
            {
                user_id: Number(id),
            },
            ADD_FRIEND_URL
        );

        pushMyFriends(friends.data);
    }
    return { getFriends };
};
