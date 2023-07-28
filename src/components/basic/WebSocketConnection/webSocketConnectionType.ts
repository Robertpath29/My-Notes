export type webSocketConnectionType = {
    url: string;
    user?: {};
    friend?: {
        name: string;
    };
    message?: { from_whom: string; whom: string; message: string };
    onOpen?: () => void;
    onClose?: () => void;
    onMessage?: (message: string) => void;
};
