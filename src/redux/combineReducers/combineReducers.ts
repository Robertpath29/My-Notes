import { combineReducers } from "@reduxjs/toolkit";
import { reducer as loadingReducer } from "../Loading/loadingSlice";
import { reducer as registerLogInReducer } from "../RegisterLogIn/registerLogInSlice";

export const reducers = combineReducers({
    loading: loadingReducer,
    registerLogIn: registerLogInReducer,
});

export type reducersType = ReturnType<typeof reducers>;
