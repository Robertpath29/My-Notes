import React, { FC, useEffect, useState } from "react";
import { GroupMessage, MessageStyle } from "./message.style";
import { messageType } from "./messageType";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const Message: FC<messageType> = ({ children, position }) => {
    const { login } = useSelector((state: reducersType) => state.user);
    const [pos, setPos] = useState("");
    useEffect(() => {
        if (position !== login) {
            setPos("start");
        } else {
            setPos("end");
        }
    }, []);
    return (
        <GroupMessage position={pos}>
            <MessageStyle>{children}</MessageStyle>
        </GroupMessage>
    );
};

export default Message;
