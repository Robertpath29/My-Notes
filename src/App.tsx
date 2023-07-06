import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginPages, mainPages, startPages } from "./routers/routers";
import { RouterContext } from "./context/context";
import { useSelector } from "react-redux";
import { reducersType } from "./redux/combineReducers/combineReducers";
import { cookieLoadingPagesStart } from "./utils/cookieLoadingPagesStart";

function App() {
    const [isLoadingPagesStart, setIsLoadingPagesStart] = useState(true);
    const { userIsLogIn } = useSelector(
        (store: reducersType) => store.registerLogIn
    );

    const user = useSelector((store: reducersType) => store.user);
    console.log(user);

    useEffect(() => {
        if (!cookieLoadingPagesStart(setIsLoadingPagesStart)) {
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 60000);
            document.cookie = `isLoadingPagesStart=; expires=${expirationDate.toUTCString()}`;
        }
    }, []);
    return (
        <RouterContext.Provider
            value={{
                setIsLoadingPagesStart,
            }}
        >
            <BrowserRouter>
                <Routes>
                    {isLoadingPagesStart
                        ? startPages.map((route) => (
                              <Route
                                  path={route.path}
                                  element={route.element}
                                  key={route.path}
                              />
                          ))
                        : loginPages.map((route) => (
                              <Route
                                  path={route.path}
                                  element={route.element}
                                  key={route.path}
                              />
                          ))}
                    {userIsLogIn &&
                        mainPages.map((route) => (
                            <Route
                                path={route.path}
                                element={route.element}
                                key={route.path}
                            />
                        ))}
                </Routes>
            </BrowserRouter>
        </RouterContext.Provider>
    );
}

export default App;
