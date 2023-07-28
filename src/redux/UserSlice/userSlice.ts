import { createSlice } from "@reduxjs/toolkit";
import { friends } from "../../components/Chat/chatType";
const initialState = {
    id: ``,
    login: ``,
    email: ``,
    dataUser: {
        id: 0,
        photo: "",
        name: "",
        surname: "",
        birthday: "",
        country: "",
        city: "",
        address: "",
    },
    myFriends: [] as friends[],
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
        setImgUser: (state, { payload }) => {
            state.dataUser.photo = payload.photo;
        },
        pushMyFriends: (state, { payload }) => {
            state.myFriends = payload;
        },
    },
});

export const { actions, reducer } = userSlice;
