import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginPages, startPages } from "./routers/routers";
import { RouterContext } from "./context/context";

function App() {
    const [loads, setLoads] = useState(true);
    const [loading, setLoading] = useState(false);
    return (
        <RouterContext.Provider value={{ setLoads, loading, setLoading }}>
            <BrowserRouter>
                <Routes>
                    {loads
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
                </Routes>
            </BrowserRouter>
        </RouterContext.Provider>
    );
}

export default App;