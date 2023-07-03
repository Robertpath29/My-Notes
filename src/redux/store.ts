import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./combineReducers/combineReducers";

export const store = configureStore({
    reducer: reducers,
});
