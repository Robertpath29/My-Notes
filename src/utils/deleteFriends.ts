import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axiosQuery, { ADD_FRIEND_URL, GET_USER_URL } from "../api/AxiosQuery";

export async function deleteFriend(
    loginFriend: string,
    login: string,
    getFriends: () => void,
    setNewFriend: ActionCreatorWithPayload<any, "webSocket/setNewFriend">,
    id: string,
    focusFriend: {
        name: string;
        nameTableMessage: string;
    }
) {
    const friendDB = await axiosQuery.axiosQueryGet(
        { login: loginFriend },
        GET_USER_URL
    );

    const friend = {
        myId: id,
        myLogin: login,
        friendId: friendDB.data.id,
        friendLogin: friendDB.data.login,
        nameTableMessage: focusFriend.nameTableMessage,
    };

    const response = await axiosQuery.axiosQueryDelete(friend, ADD_FRIEND_URL);

    if (response.data.message === "friends delete") {
        setNewFriend({ friend: friend.friendLogin, delete: true });
        setTimeout(() => {
            getFriends();
        }, 100);
    }
}
