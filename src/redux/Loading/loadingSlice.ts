import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false };

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        stateLoading: (state, action) => {
            const stateLoad = action.payload;
            state.isLoading = stateLoad;
        },
    },
});

export const { actions, reducer } = loadingSlice;
