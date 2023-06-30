import {
    useValidFormType,
    validFormType,
} from "../types/validationForm/validFormType";

let userName = false,
    password = false;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/,
    passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validFormsLogin(
    data: validFormType,
    setValid: React.Dispatch<React.SetStateAction<useValidFormType>>
): boolean {
    if (data.userName === "") {
        userName = false;
        setValid((valid) => ({ ...valid, userName: true }));
    } else {
        const isValidUsername = usernameRegex.test(data.userName);
        if (isValidUsername) {
            userName = true;
        } else {
            userName = false;
        }
        setValid((valid) => ({ ...valid, userName: !isValidUsername }));
    }
    if (data.password === "") {
        password = false;
        setValid((valid) => ({ ...valid, password: true }));
    } else {
        const isValidPassword = passwordRegex.test(data.password);
        if (isValidPassword) {
            password = true;
        } else {
            password = false;
        }
        setValid((valid) => ({ ...valid, password: !isValidPassword }));
    }
    if (userName && password) {
        return true;
    } else {
        return false;
    }
}

export default validFormsLogin;
