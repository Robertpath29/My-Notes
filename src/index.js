import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import GlobalStyles from "./style/global.style.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <GlobalStyles />
        <App />
    </>
);
