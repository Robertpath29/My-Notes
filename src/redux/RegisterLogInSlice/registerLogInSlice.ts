import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    cancelRegister: false,
    userIsRegistered: false,
    userIsLogIn: false,
};
const registerLogInSlice = createSlice({
    name: `registerLogIn`,
    initialState,
    reducers: {
        cancelRegister: (state, { payload }) => {
            state.cancelRegister = payload.cancelRegister;
        },
        registerMessage: (state, { payload }) => {
            state.message = payload.message;
        },
        userRegistration: (state, { payload }) => {
            state.userIsRegistered = payload.userIsRegistered;
        },
        userLogIn: (state, { payload }) => {
            state.userIsLogIn = payload.userIsLogIn;
        },
    },
});

export const { actions, reducer } = registerLogInSlice;
