import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axiosQuery, { UNREAD_MESSAGE_URL } from "./AxiosQuery";
import { getUnreadMessage } from "./getUnreadMessage";

export async function deleteUnreadMessage(
    focus: string,
    login: string,
    setArrayNameFriendsUnreadMessage: ActionCreatorWithPayload<
        any,
        "webSocket/setArrayNameFriendsUnreadMessage"
    >
) {
    if (focus === "") return;
    const response = await axiosQuery.axiosQueryDelete(
        { whom: focus, from_whom: login },
        UNREAD_MESSAGE_URL
    );
    if (response.data.message === `delete table rows ${focus}`) {
        getUnreadMessage(login, setArrayNameFriendsUnreadMessage);
    }
}
