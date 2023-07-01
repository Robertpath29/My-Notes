import { createContext } from "react";

export const RouterContext = createContext({
    loading: false,
    setLoads: (value: boolean) => {},
    setLoading: (value: boolean) => {},
});
