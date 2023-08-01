export type initialStateType = {
    online: boolean;
    message: messageDisplayType;
    messageDisplay: messageDisplayType[];
    arrayNameFriendsUnreadMessage: unreadMessageType[];
    friend: {
        name: string;
        delete: boolean;
    };
};

export type messageDisplayType = {
    from_whom: string;
    whom: string;
    message: string;
    date: string;
};

export type unreadMessageType = {
    id: number;
    name_friend: string;
};
