import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginPages, mainPages, startPages } from "./routers/routers";
import { RouterContext } from "./context/context";
import { useSelector } from "react-redux";
import { reducersType } from "./redux/combineReducers/combineReducers";
import { cookieLoadingPagesStart } from "./utils/cookieLoadingPagesStart";
import { cookieGetUser } from "./api/cookieGetUser";
import { useAction } from "./hooks/useAction";
import WebSocketConnection from "./components/basic/WebSocketConnection/WebSocketConnection";
import { getUnreadMessage } from "./api/getUnreadMessage";
import AudioMessage from "./components/AudioMessage/AudioMessage";

function App() {
    const [isLoadingPagesStart, setIsLoadingPagesStart] = useState(true);
    const [playAudio, isPlayAudio] = useState(false);
    const { userIsLogIn } = useSelector(
        (store: reducersType) => store.registerLogIn
    );
    const user = useSelector((store: reducersType) => store.user);
    const { online, message, friend } = useSelector(
        (store: reducersType) => store.webSocket
    );
    const {
        userLogIn,
        setUser,
        isOnline,
        setMessageDisplay,
        setArrayNameFriendsUnreadMessage,
        clearMessageDisplay,
    } = useAction();

    useEffect(() => {
        if (!cookieLoadingPagesStart(setIsLoadingPagesStart)) {
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 60000);
            document.cookie = `isLoadingPagesStart=; expires=${expirationDate.toUTCString()}`;
        }
        cookieGetUser(userLogIn, setUser, isOnline);
    }, [setUser, userLogIn, isOnline]);
    useEffect(() => {
        getUnreadMessage(user.login, setArrayNameFriendsUnreadMessage);
        clearMessageDisplay();
    }, [user.login]);
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
                        : userIsLogIn
                        ? mainPages.map((route) => (
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
                </Routes>
            </BrowserRouter>
            {online && (
                <>
                    <WebSocketConnection
                        url="wss://my-notes-server-project-481be4be43f0.herokuapp.com"
                        user={user}
                        message={message}
                        friend={friend}
                        isPlayAudio={isPlayAudio}
                        onMessage={(e) => {
                            setMessageDisplay(e);
                            if (e.from_whom !== user.login) {
                                isPlayAudio(true);
                            }
                        }}
                    />
                    <AudioMessage
                        playAudio={playAudio}
                        isPlayAudio={isPlayAudio}
                    />
                </>
            )}
        </RouterContext.Provider>
    );
}

export default App;
