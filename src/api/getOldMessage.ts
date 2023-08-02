import {
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import axiosQuery, { MESSAGE_URL } from "./AxiosQuery";
import { ourMessagesType } from "../components/Friend/friendType";

export async function getOldMessage(
    focusFriend: {
        name: string;
        nameTableMessage: string;
        focusStyle: string;
    },
    numberLoadingMessage: number,
    setNumberLoadingMessage: ActionCreatorWithPayload<
        any,
        "webSocket/setNumberLoadingMessage"
    >,
    clearMessageDisplay: ActionCreatorWithoutPayload<"webSocket/clearMessageDisplay">,
    setMessageDisplay: ActionCreatorWithPayload<
        any,
        "webSocket/setMessageDisplay"
    >
) {
    clearMessageDisplay();
    const ourMessages = await axiosQuery.axiosQueryGet(
        {
            nameTableMessage: focusFriend.nameTableMessage,
            numberMessage: numberLoadingMessage + 5,
        },
        MESSAGE_URL
    );

    setNumberLoadingMessage(numberLoadingMessage + 5);
    if (ourMessages.data) {
        ourMessages.data.forEach((element: ourMessagesType) => {
            setMessageDisplay(element);
        });
    }
}
