export type chatType = {
    myFriends: friends[];
    getFriends: () => void;
    setMyFriends: React.Dispatch<React.SetStateAction<friends[]>>;
};

export type friends = {
    id: number;
    login: string;
    user_id: number;
};
