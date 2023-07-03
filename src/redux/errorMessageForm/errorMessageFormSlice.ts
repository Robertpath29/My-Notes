import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName: false,
    email: false,
    password: false,
    repeatPassword: false,
    samePasswords: false,
};
export const errorMessageForm = createSlice({
    name: `validationForm`,
    initialState,
    reducers: {
        validUserName: (state, { payload }) => {
            state.userName = payload.userName;
        },
        validEmail: (state, { payload }) => {
            state.email = payload.email;
        },
        validPassword: (state, { payload }) => {
            state.password = payload.password;
        },
        validRepeatPassword: (state, { payload }) => {
            state.repeatPassword = payload.repeatPassword;
        },
        validSamePasswords: (state, { payload }) => {
            state.samePasswords = payload.samePasswords;
        },
    },
});

export const { actions, reducer } = errorMessageForm;
