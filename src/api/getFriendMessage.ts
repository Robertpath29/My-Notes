import {
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import { ourMessagesType } from "../components/Friend/friendType";
import axiosQuery, { MESSAGE_URL } from "./AxiosQuery";

export async function getFriendMessage(
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    setFocusFriend: ActionCreatorWithPayload<any, "User/setFocusFriend">,
    setMessageDisplay: ActionCreatorWithPayload<
        any,
        "webSocket/setMessageDisplay"
    >,
    setFocusStyle: ActionCreatorWithPayload<any, "User/setFocusStyle">,
    clearMessageDisplay: ActionCreatorWithoutPayload<"webSocket/clearMessageDisplay">,
    numberLoadingMessage: number,
    ClearNumberLoadingMessage: ActionCreatorWithoutPayload<"webSocket/ClearNumberLoadingMessage">,
    focusFriend: {
        name: string;
        nameTableMessage: string;
        focusStyle: string;
    }
) {
    const element = e.target as HTMLElement;
    if (
        element.getAttribute("data-login") === focusFriend.name ||
        element.parentElement?.getAttribute("data-login") === focusFriend.name
    ) {
        return;
    }
    setFocusStyle("");
    setFocusFriend({ name: "", nameTableMessage: "" });
    clearMessageDisplay();
    ClearNumberLoadingMessage();
    if (
        element.getAttribute("data-login") ||
        element.parentElement?.getAttribute("data-login")
    ) {
        const friendLogin =
            element.getAttribute("data-login") ||
            element.parentElement?.getAttribute("data-login");
        const friendTableMessage =
            element.getAttribute("data-name_table_message") ||
            element.parentElement?.getAttribute("data-name_table_message");
        setFocusStyle(friendLogin);
        setFocusFriend({
            name: friendLogin,
            nameTableMessage: friendTableMessage,
        });
        const ourMessages = await axiosQuery.axiosQueryGet(
            {
                nameTableMessage: friendTableMessage,
                numberMessage: numberLoadingMessage,
            },
            MESSAGE_URL
        );
        if (ourMessages.data) {
            clearMessageDisplay();
            ourMessages.data.forEach((element: ourMessagesType) => {
                setMessageDisplay(element);
            });
        }
    }
}
