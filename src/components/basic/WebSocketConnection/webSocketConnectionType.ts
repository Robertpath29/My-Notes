import { messageDisplayType } from "../../../redux/webSocketSlice/webSocketSliceType";

export type webSocketConnectionType = {
    url: string;
    user?: {};
    friend?: {
        name: string;
    };
    message?: { from_whom: string; whom: string; message: string };
    onOpen?: () => void;
    onClose?: () => void;
    onMessage?: (message: messageDisplayType) => void;
};
