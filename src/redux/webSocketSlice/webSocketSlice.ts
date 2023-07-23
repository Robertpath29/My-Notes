import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    online: false,
};

export const webSocketSlice = createSlice({
    name: "webSocket",
    initialState,
    reducers: {
        isOnline: (state, { payload }) => {
            state.online = payload.online;
        },
    },
});

export const { actions, reducer } = webSocketSlice;
