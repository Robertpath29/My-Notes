import { createContext } from "react";
import { routerContextType } from "./routerContexType";

export const RouterContext = createContext<routerContextType>({
    setIsLoadingPagesStart: (value: boolean) => {},
});
