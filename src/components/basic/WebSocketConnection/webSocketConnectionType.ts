export type webSocketConnectionType = {
    url: string;
    user?: {};
    message?: { fromWhom: string; whom: string; message: string };
    onOpen?: () => void;
    onClose?: () => void;
    onMessage?: (message: string) => void;
};
