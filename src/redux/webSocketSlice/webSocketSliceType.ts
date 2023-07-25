export type initialStateType = {
    online: boolean;
    chatConnecting: boolean;
    message: {
        fromWhom: string;
        whom: string;
        message: string;
    };
    messageDisplay: {
        fromWhom: string;
        whom: string;
        message: string;
    }[];
};
