import { Dispatch, SetStateAction } from "react";
import { friends } from "../Chat/chatType";

export type friendType = {
    friend: friends;
    isVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
