import { useSelector } from "react-redux";
import axiosQuery, { ADD_FRIEND_URL } from "../api/AxiosQuery";
import { reducersType } from "../redux/combineReducers/combineReducers";
import { useAction } from "./useAction";

export const useGetFriends = () => {
    const { id } = useSelector((state: reducersType) => state.user);
    const { pushMyFriends, setFocusStyle } = useAction();

    async function getFriends() {
        const friends = await axiosQuery.axiosQueryGet(
            {
                user_id: Number(id),
            },
            ADD_FRIEND_URL
        );
        setFocusStyle("");
        pushMyFriends(friends.data);
    }
    return { getFriends };
};
