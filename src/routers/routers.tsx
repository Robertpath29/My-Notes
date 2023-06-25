import { Navigate } from "react-router-dom";
import { routerType } from "../types/routers/routerType";
import StartPages from "../pages/StartPages";

export const startPages: routerType = [
    { path: "/", element: <StartPages /> },
    { path: "*", element: <Navigate to={"/"} /> },
];
