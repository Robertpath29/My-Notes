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
        cancelRegister: (state, action) => {
            const stateRegister = action.payload;
            state.cancelRegister = stateRegister.cancelRegister;
        },
        registerMessage: (state, action) => {
            const stateRegister = action.payload;
            state.message = stateRegister.message;
        },
        userRegistration: (state, action) => {
            const stateRegister = action.payload;
            state.userIsRegistered = stateRegister.userIsRegistered;
        },
        userLogIn: (state, action) => {
            const stateRegister = action.payload;
            state.userIsLogIn = stateRegister.userIsLogIn;
        },
    },
});

export const { actions, reducer } = registerLogInSlice;
