import { friends } from "../components/Chat/chatType";
import { unreadMessageType } from "../redux/webSocketSlice/webSocketSliceType";

export function numberUnreadMessage(
    arrayNameFriendsUnreadMessage: unreadMessageType[],
    friend: friends,
    setNumberUnreadMes: (value: React.SetStateAction<number>) => void
) {
    const numberUnreadMessage: object[] = [];
    for (let x of arrayNameFriendsUnreadMessage) {
        if (x.name_friend === friend.login) {
            numberUnreadMessage.push(x);
        }
    }
    setNumberUnreadMes(numberUnreadMessage.length);
}
