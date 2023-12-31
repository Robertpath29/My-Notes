import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axiosQuery, { ADD_FRIEND_URL, GET_USER_URL } from "./AxiosQuery";

export async function addFriend(
    nameFriend: {
        login: string;
    },
    isWarning: React.Dispatch<
        React.SetStateAction<{
            war: boolean;
            message: string;
        }>
    >,
    login: string,
    setNameFriend: React.Dispatch<
        React.SetStateAction<{
            login: string;
        }>
    >,
    getFriends: () => void,
    id: string,
    setNewFriend: ActionCreatorWithPayload<any, "webSocket/setNewFriend">,
    isLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
    const friendDB = await axiosQuery.axiosQueryGet(
        { login: nameFriend.login },
        GET_USER_URL
    );
    if (friendDB.data.length === 0) {
        isLoading(false);
        isWarning({ war: true, message: "User not found" });
        return;
    }
    if (friendDB.data.login === login) {
        isLoading(false);
        isWarning({ war: true, message: "It's you!" });
        return;
    }
    const friend = {
        myId: id,
        myLogin: login,
        friendId: friendDB.data.id,
        friendLogin: friendDB.data.login,
    };
    const response = await axiosQuery.axiosQueryPost(friend, ADD_FRIEND_URL);

    if (response.data.message === "The user is your friend") {
        isLoading(false);
        isWarning({ war: true, message: response.data.message });
        return;
    }

    if (response.data.message === "friends ready") {
        isLoading(false);
        setNameFriend({ login: "" });
        setNewFriend({ friend: friend.friendLogin, delete: false });
        setTimeout(() => {
            getFriends();
        }, 100);
    }
}
