import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayBtnChat: "Block",
    displayChat: "none",
    opacity: 1,
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
        setOpacity(state, { payload }) {
            state.opacity = payload.opacity;
        },
    },
});

export const { reducer, actions } = chatSlice;
