import axiosQuery, { MESSAGE_URL } from "../api/AxiosQuery";
import { useAction } from "./useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducers/combineReducers";
import { useState } from "react";
import { getData } from "../utils/getDate";

export const useSubmitMessage = (focusFriend: {
    name: string;
    nameTableMessage: string;
    focusStyle: string;
}) => {
    const [warning, isWarning] = useState({ war: false, message: "" });
    const [myMessage, setMyMessage] = useState("");
    const { login } = useSelector((state: reducersType) => state.user);
    const { setWhom } = useAction();

    function submitMessage() {
        const date = getData();
        if (focusFriend.name === "") {
            isWarning({ war: true, message: "Сhoose a friend!" });
            return;
        }
        if (myMessage === "") return;
        isWarning({ war: false, message: "" });
        setWhom({
            from_Whom: login,
            whom: focusFriend.name,
            message: myMessage,
            date: date,
        });
        setMyMessage("");
        setTimeout(() => {
            axiosQuery.axiosQueryPost(
                {
                    from_whom: login,
                    whom: focusFriend.name,
                    message: myMessage,
                    date: date,
                    nameTableMessage: focusFriend.nameTableMessage,
                },
                MESSAGE_URL
            );
        }, 100);
    }
    return { submitMessage, warning, isWarning, setMyMessage, myMessage };
};
