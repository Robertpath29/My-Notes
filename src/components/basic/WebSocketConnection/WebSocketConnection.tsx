import { FC, useEffect, useRef } from "react";
import { webSocketConnectionType } from "./webSocketConnectionType";
import { useGetFriends } from "../../../hooks/useGetFriends";
import { useAction } from "../../../hooks/useAction";

const WebSocketConnection: FC<webSocketConnectionType> = ({
    url,
    user,
    message,
    friend,
    onMessage,
    onOpen,
    onClose,
}) => {
    const ws = useRef<WebSocket | null>(null);
    const { getFriends } = useGetFriends();
    const { setNewFriend, setFocusFriend } = useAction();
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
            if (mes.userFriends) {
                setTimeout(() => {
                    getFriends();
                    setNewFriend({ friend: "", delete: false });
                    setFocusFriend("");
                }, 100);
                return;
            }
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
    useEffect(() => {
        if (friend && friend.name !== "") sendMessage(friend);
    }, [friend]);
    return null;
};

export default WebSocketConnection;
