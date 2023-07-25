import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./webSocketSliceType";

const initialState: initialStateType = {
    online: false,
    chatConnecting: false,
    message: {
        fromWhom: "",
        whom: "",
        message: "",
    },

    messageDisplay: [],
};

export const webSocketSlice = createSlice({
    name: "webSocket",
    initialState,
    reducers: {
        isOnline: (state, { payload }) => {
            state.online = payload.online;
        },
        isChatConnecting: (state, { payload }) => {
            state.chatConnecting = payload.chatConnecting;
        },
        setWhom: (state, { payload }) => {
            state.message.fromWhom = payload.fromWhom;
            state.message.whom = payload.whom;
            state.message.message = payload.message;
        },

        setMessageDisplay: (state, { payload }) => {
            state.messageDisplay.push(payload);
        },
    },
});

export const { actions, reducer } = webSocketSlice;
