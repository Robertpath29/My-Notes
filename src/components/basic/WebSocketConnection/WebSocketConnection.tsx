import { FC, useEffect, useRef } from "react";
import { webSocketConnectionType } from "./webSocketConnectionType";
import { useGetFriends } from "../../../hooks/useGetFriends";
import { useAction } from "../../../hooks/useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../../../redux/combineReducers/combineReducers";
import axiosQuery, { UNREAD_MESSAGE_URL } from "../../../api/AxiosQuery";

const WebSocketConnection: FC<webSocketConnectionType> = ({
    url,
    user,
    message,
    friend,
    onMessage,
    onOpen,
    onClose,
    isPlayAudio,
}) => {
    const ws = useRef<WebSocket | null>(null);
    const { getFriends } = useGetFriends();
    const { focusFriend, login } = useSelector(
        (state: reducersType) => state.user
    );
    const { setNewFriend, setFocusFriend, pushArrayNameFriendsUnreadMessage } =
        useAction();

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
                    setFocusFriend({ name: "", nameTableMessage: "" });
                }, 100);
                return;
            }
            if (onMessage) {
                if (
                    focusFriend.name !== mes.from_whom &&
                    mes.from_whom !== login
                ) {
                    pushArrayNameFriendsUnreadMessage({
                        id: Date.now(),
                        name_friend: mes.from_whom,
                    });
                    isPlayAudio(true);
                    axiosQuery.axiosQueryPost(
                        { whom: mes.whom, from_whom: mes.from_whom },
                        UNREAD_MESSAGE_URL
                    );
                    return;
                }
                onMessage(mes);
            }
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
    }, [focusFriend]);

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
