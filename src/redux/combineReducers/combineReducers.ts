import { combineReducers } from "@reduxjs/toolkit";
import { reducer as loadingReducer } from "../LoadingSlice/loadingSlice";
import { reducer as registerLogInReducer } from "../RegisterLogInSlice/registerLogInSlice";
import { reducer as validationFormReducer } from "../errorMessageFormSlice/errorMessageFormSlice";
import { reducer as userReducer } from "../user/userSlice";

export const reducers = combineReducers({
    loading: loadingReducer,
    registerLogIn: registerLogInReducer,
    validationForm: validationFormReducer,
    user: userReducer,
});

export type reducersType = ReturnType<typeof reducers>;
