import { FC, useEffect, useRef } from "react";
import { webSocketConnectionType } from "./webSocketConnectionType";

const WebSocketConnection: FC<webSocketConnectionType> = ({
    url,
    user,
    message,
    onMessage,
    onOpen,
    onClose,
}) => {
    const ws = useRef<WebSocket | null>(null);
    useEffect(() => {
        ws.current = new WebSocket(url);

        const open = () => {
            if (onOpen) onOpen();
            if (user) {
                const jsonUser = JSON.stringify(user);
                sendMessage(jsonUser);
            }
        };
        const message = (e: any) => {
            if (onMessage) onMessage(e.data);
        };
        const close = () => {
            if (onClose) onClose();
        };

        ws.current.onopen = open;
        ws.current.onmessage = message;
        ws.current.onclose = close;

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [url, onMessage, onClose, onOpen, user]);

    const sendMessage = (message: string) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(message);
        }
    };

    useEffect(() => {
        if (message) sendMessage(message);
    }, [message]);
    return null;
};

export default WebSocketConnection;
