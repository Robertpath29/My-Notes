import { createContext, SetStateAction } from "react";
import { routerContextType } from "./routerContexType";

export const RouterContext = createContext<routerContextType>({
    isLoading: false,
    isRegister: { message: "", cancelRegister: false, userIsRegistered: false },
    setIsLoadingPagesStart: (value: boolean) => {},
    setLoading: (value: boolean) => {},
    setRegister: (
        value: SetStateAction<{
            message: string;
            cancelRegister: boolean;
            userIsRegistered: boolean;
            userIsLogIn: boolean;
        }>
    ) => {},
});
