export type formInfoUserType = {
    setSelectedImg: React.Dispatch<React.SetStateAction<null>>;
    submit: (data: dataObj, id?: number) => Promise<void>;
};

export type dataObj = {
    name: string;
    surname: string;
    birthday: string;
    country: string;
    city: string;
    address: string;
    user_id: string;
    infoUser_id: number;
    photo: string;
};
