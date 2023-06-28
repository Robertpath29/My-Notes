import { Navigate } from "react-router-dom";
import { routerType } from "../types/routers/routerType";
import StartPages from "../pages/StartPages";
import LoginPages from "../pages/LoginPages";

export const startPages: routerType = [
    { path: "/", element: <StartPages /> },
    { path: "*", element: <Navigate to={"/"} /> },
];

export const loginPages: routerType = [
    { path: "/login", element: <LoginPages /> },
    { path: "*", element: <Navigate to={"/login"} /> },
];
