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
                sendMessage(user);
            }
        };
        const message = (e: any) => {
            const mes = JSON.parse(e.data);
            if (onMessage) onMessage(mes);
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
    }, []);

    const sendMessage = (message: object) => {
        const parseMessage = JSON.stringify(message);
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(parseMessage);
        }
    };

    useEffect(() => {
        if (message) sendMessage(message);
    }, [message]);
    return null;
};

export default WebSocketConnection;
