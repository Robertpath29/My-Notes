import { combineReducers } from "@reduxjs/toolkit";
import { reducer as loadingReducer } from "../LoadingSlice/loadingSlice";
import { reducer as registerLogInReducer } from "../RegisterLogInSlice/registerLogInSlice";
import { reducer as validationFormReducer } from "../errorMessageFormSlice/errorMessageFormSlice";
import { reducer as userReducer } from "../UserSlice/userSlice";
import { reducer as confirmReducer } from "../ConfirmSlice/confirmSlice";
import { reducer as chatReducer } from "../ChatSlice/chatSlice";

export const reducers = combineReducers({
    loading: loadingReducer,
    registerLogIn: registerLogInReducer,
    validationForm: validationFormReducer,
    user: userReducer,
    confirm: confirmReducer,
    chat: chatReducer,
});

export type reducersType = ReturnType<typeof reducers>;
