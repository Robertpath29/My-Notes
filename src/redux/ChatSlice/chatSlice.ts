import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayBtnChat: "Block",
    displayChat: "none",
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setDisplayBtnChat(state, { payload }) {
            state.displayBtnChat = payload.displayBtnChat;
        },
        setDisplayChat(state, { payload }) {
            state.displayChat = payload.displayChat;
        },
    },
});

export const { reducer, actions } = chatSlice;
