import { Navigate } from "react-router-dom";
import { routerType } from "./routerType";
import StartPages from "../pages/StartPages/StartPages";
import LoginPages from "../pages/LoginPages/LoginPages";
import FormRegistration from "../pages/FormRegistration/FormRegistration";

export const startPages: routerType = [
    { path: "/", element: <StartPages /> },
    { path: "*", element: <Navigate to={"/"} /> },
];

export const loginPages: routerType = [
    { path: "/login", element: <LoginPages /> },
    { path: "/registration", element: <FormRegistration /> },
    { path: "*", element: <Navigate to={"/login"} /> },
];
