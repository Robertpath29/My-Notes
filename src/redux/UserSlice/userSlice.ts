import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: ``,
    login: ``,
    email: ``,
    dataUser: {
        photo: "",
        name: "",
        surname: "",
        birthday: "",
        country: "",
        city: "",
        address: "",
    },
};
export const userSlice = createSlice({
    name: `User`,
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.id = payload.id;
            state.login = payload.login;
            state.email = payload.email;
        },
        setDataUser: (state, { payload }) => {
            state.dataUser = payload.dataUser;
        },
    },
});

export const { actions, reducer } = userSlice;
