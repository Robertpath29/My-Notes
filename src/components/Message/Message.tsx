import React, { FC, useEffect, useState } from "react";
import { DataStyle, GroupMessage, MessageStyle } from "./message.style";
import { messageType } from "./messageType";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const Message: FC<messageType> = ({ message }) => {
    const { login } = useSelector((state: reducersType) => state.user);
    const [pos, setPos] = useState("");
    useEffect(() => {
        if (message.from_whom !== login) {
            setPos("start");
        } else {
            setPos("end");
        }
    }, []);

    return (
        <GroupMessage position={pos} className="chat">
            {pos === "end" && <DataStyle>{message.date}</DataStyle>}
            <MessageStyle className="chat" position={pos}>
                {message.message}
            </MessageStyle>
            {pos === "start" && <DataStyle>{message.date}</DataStyle>}
        </GroupMessage>
    );
};

export default Message;
