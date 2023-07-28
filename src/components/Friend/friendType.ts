import { Dispatch, SetStateAction } from "react";
import { friends } from "../Chat/chatType";

export type friendType = {
    login: string;
    nameTableMessage: string;
    friend: friends;
    isVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ourMessagesType = {
    fromWhom: string;
    whom: string;
    message: string;
    date: string;
};
