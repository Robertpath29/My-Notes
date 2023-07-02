export type validFormType = {
    userName: string;
    email: string;
    password: string;
    repeatPassword: string;
};

export type useValidFormType = {
    userName: boolean;
    email: boolean;
    password: boolean;
    repeatPassword: boolean;
    samePasswords: boolean;
};
