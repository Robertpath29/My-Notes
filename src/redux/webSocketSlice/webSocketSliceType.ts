export type initialStateType = {
    online: boolean;
    message: messageDisplayType;
    messageDisplay: messageDisplayType[];
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
