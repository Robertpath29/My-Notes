import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
};

const confirmSlice = createSlice({
    name: `confirm`,
    initialState,
    reducers: {
        visibilityConfirm: (state, { payload }) => {
            state.visibility = payload.visibility;
        },
    },
});

export const { actions, reducer } = confirmSlice;
