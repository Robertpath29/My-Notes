export type initialStateType = {
    online: boolean;
    message: {
        from_whom: string;
        whom: string;
        message: string;
        date: string;
    };
    messageDisplay: {
        from_whom: string;
        whom: string;
        message: string;
    }[];
    friend: {
        name: string;
        delete: boolean;
    };
};
