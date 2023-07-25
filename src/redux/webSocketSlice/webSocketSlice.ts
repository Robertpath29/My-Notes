import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    online: false,
    chatConnecting: false,
    message: {
        fromWhom: "",
        whom: "",
        message: "",
    },
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
        },
        setMessage: (state, { payload }) => {
            state.message.message = payload.message;
        },
    },
});

export const { actions, reducer } = webSocketSlice;
