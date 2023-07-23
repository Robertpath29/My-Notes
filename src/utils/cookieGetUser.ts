import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import axiosQuery, { LOGIN_URL } from "../api/AxiosQuery";
import { secretKAY } from "../config/config";
import CryptoJS from "crypto-js";
export async function cookieGetUser(
    userLogIn: (value: object) => void,
    setUser: (value: object) => void,
    isOnline: ActionCreatorWithPayload<any, "webSocket/isOnline">
) {
    const saveUser = document.cookie.split("; ");
    const saveUserCookie = saveUser.find((saveUser) =>
        saveUser.startsWith("saveUser=")
    );

    if (saveUserCookie) {
        userLogIn({ userIsLogIn: true });
        const sessionValue = saveUserCookie.split("=")[1];
        const decryptedData = CryptoJS.AES.decrypt(
            sessionValue,
            secretKAY
        ).toString(CryptoJS.enc.Utf8);
        const parsedResponse = JSON.parse(decryptedData);

        const user = await axiosQuery.axiosQueryGet(
            {
                userName: parsedResponse.userName,
                password: parsedResponse.password,
            },
            LOGIN_URL
        );
        setUser({
            id: user.data.user.id,
            login: user.data.user.login,
            email: user.data.user.email,
            dataUser: [],
        });
        isOnline({ online: true });
    }
}
