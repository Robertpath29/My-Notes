export type initialStateType = {
    online: boolean;
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
    friend: {
        name: string;
        delete: boolean;
    };
};
