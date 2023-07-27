import axiosQuery, { ADD_FRIEND_URL, GET_USER_URL } from "../api/AxiosQuery";

export async function deleteFriend(
    loginFriend: string,
    login: string,
    getFriends: () => void,
    id: string
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
    };

    const response = await axiosQuery.axiosQueryDelete(friend, ADD_FRIEND_URL);

    if (response.data.message === "friends delete") {
        setInterval(() => {
            getFriends();
        });
    }
}
