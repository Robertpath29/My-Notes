import React, { FC, useEffect, useState } from "react";
import { DataStyle, GroupMessage, MessageStyle } from "./message.style";
import { messageType } from "./messageType";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const Message: FC<messageType> = ({ message }) => {
    const { login } = useSelector((state: reducersType) => state.user);
    const [pos, setPos] = useState("");
    const newDate = message.date.split(" ").reverse().splice(0, 1).join("");
    useEffect(() => {
        if (message.from_whom !== login) {
            setPos("start");
        } else {
            setPos("end");
        }
    }, []);

    return (
        <GroupMessage position={pos} className="chat">
            {pos === "end" && <DataStyle>{newDate}</DataStyle>}
            <MessageStyle className="chat" position={pos}>
                {message.message}
            </MessageStyle>
            {pos === "start" && <DataStyle>{newDate}</DataStyle>}
        </GroupMessage>
    );
};

export default Message;
