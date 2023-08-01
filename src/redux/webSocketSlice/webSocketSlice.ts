import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./webSocketSliceType";

const initialState: initialStateType = {
    online: false,
    message: {
        from_whom: "",
        whom: "",
        message: "",
        date: "",
    },
    arrayNameFriendsUnreadMessage: [],
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
            state.message.from_whom = payload.from_Whom;
            state.message.whom = payload.whom;
            if (payload.message === state.message.message) {
                state.message.message = payload.message + " ";
            }
            state.message.message = payload.message;
            state.message.date = payload.date;
        },

        setMessageDisplay: (state, { payload }) => {
            state.messageDisplay.push(payload);
        },
        clearMessageDisplay: (state) => {
            state.messageDisplay = [];
        },
        setNewFriend: (state, { payload }) => {
            state.friend.name = payload.friend;
            state.friend.delete = payload.delete;
        },

        setArrayNameFriendsUnreadMessage: (state, { payload }) => {
            state.arrayNameFriendsUnreadMessage = payload;
        },
        pushArrayNameFriendsUnreadMessage: (state, { payload }) => {
            state.arrayNameFriendsUnreadMessage.push(payload);
        },
    },
});

export const { actions, reducer } = webSocketSlice;
