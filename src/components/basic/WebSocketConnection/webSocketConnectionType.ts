export type webSocketConnectionType = {
    url: string;
    user?: {};
    message?: string;
    onOpen?: () => void;
    onClose?: () => void;
    onMessage?: (message: string) => void;
};
