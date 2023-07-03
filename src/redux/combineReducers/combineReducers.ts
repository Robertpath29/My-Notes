import { combineReducers } from "@reduxjs/toolkit";
import { reducer as loadingReducer } from "../Loading/loadingSlice";

export const reducers = combineReducers({ loading: loadingReducer });

export type reducersType = ReturnType<typeof reducers>;
