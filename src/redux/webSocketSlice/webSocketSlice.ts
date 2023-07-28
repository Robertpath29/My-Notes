import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./webSocketSliceType";

const initialState: initialStateType = {
    online: false,
    message: {
        fromWhom: "",
        whom: "",
        message: "",
    },
    messageDisplay: [],
    friend: {
        name: "",
        delete: false,
    },
};

export const webSocketSlice = createSlice({
    name: "webSocket",
    initialState,
    reducers: {
        isOnline: (state, { payload }) => {
            state.online = payload.online;
        },
        setWhom: (state, { payload }) => {
            state.message.fromWhom = payload.fromWhom;
            state.message.whom = payload.whom;
            if (payload.message === state.message.message) {
                state.message.message = payload.message + " ";
            }
            state.message.message = payload.message;
        },

        setMessageDisplay: (state, { payload }) => {
            state.messageDisplay.push(payload);
        },
        setNewFriend: (state, { payload }) => {
            state.friend.name = payload.friend;
            state.friend.delete = payload.delete;
        },
    },
});

export const { actions, reducer } = webSocketSlice;
