import { Dispatch, SetStateAction } from "react";

export type routerContextType = {
    // isLoading: boolean;
    isRegister: {
        message: string;
        cancelRegister: boolean;
        userIsRegistered: boolean;
    };
    setIsLoadingPagesStart: (value: boolean) => void;
    // setLoading: (value: boolean) => void;
    setRegister: Dispatch<
        SetStateAction<{
            message: string;
            cancelRegister: boolean;
            userIsRegistered: boolean;
            userIsLogIn: boolean;
        }>
    >;
};
