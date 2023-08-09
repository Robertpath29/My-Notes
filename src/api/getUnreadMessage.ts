import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axiosQuery, { UNREAD_MESSAGE_URL } from "./AxiosQuery";

export async function getUnreadMessage(
    login: string,
    setArrayNameFriendsUnreadMessage: ActionCreatorWithPayload<
        any,
        "webSocket/setArrayNameFriendsUnreadMessage"
    >
) {
    const response = await axiosQuery.axiosQueryGet(
        { login },
        UNREAD_MESSAGE_URL
    );
    if (response.data?.message === "no login") return;
    setArrayNameFriendsUnreadMessage(response.data);
}
