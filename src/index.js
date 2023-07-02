import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./style/global.style.ts";
import { ThemeProvider } from "styled-components";
import baseTheme from "./style/theme.style.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
