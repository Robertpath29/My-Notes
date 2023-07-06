import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: ``,
    login: ``,
    email: ``,
    dataUser: [],
};
export const userSlice = createSlice({
    name: `User`,
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.id = payload.id;
            state.login = payload.login;
            state.email = payload.email;
            state.dataUser = payload.dataUser;
        },
        setDataUser: (state, { payload }) => {},
    },
});

export const { actions, reducer } = userSlice;
