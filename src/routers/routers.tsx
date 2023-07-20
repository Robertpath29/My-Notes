import { Navigate } from "react-router-dom";
import { routerType } from "./routerType";
import StartPages from "../pages/StartPages/StartPages";
import LoginPages from "../pages/LoginPages/LoginPages";
import FormRegistration from "../pages/FormRegistration/FormRegistration";
import MainPages from "../pages/MainPages/MainPages";
import Options from "../pages/Options/Options";
import NewNotePages from "../pages/NewNotePages/NewNotePages";

export const startPages: routerType = [
    { path: "/loading", element: <StartPages /> },
    { path: "*", element: <Navigate to={"/loading"} /> },
];

export const loginPages: routerType = [
    { path: "/login", element: <LoginPages /> },
    { path: "/registration", element: <FormRegistration /> },
    { path: "*", element: <Navigate to={"/login"} /> },
];

export const mainPages: routerType = [
    { path: "/login", element: <LoginPages /> },
    { path: "/my-notes", element: <MainPages /> },
    { path: "/my-notes/options", element: <Options /> },
    { path: "/my-notes/new-note", element: <NewNotePages /> },
    { path: "*", element: <Navigate to={"/my-notes"} /> },
];
