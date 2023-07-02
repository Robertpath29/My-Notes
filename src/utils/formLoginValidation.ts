import { useValidFormType, validFormType } from "../types/validFormType";

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
        isValidUsername ? (userName = true) : (userName = false);
        setValid((valid) => ({ ...valid, userName: !isValidUsername }));
    }
    if (data.password === "") {
        password = false;
        setValid((valid) => ({ ...valid, password: true }));
    } else {
        const isValidPassword = passwordRegex.test(data.password);
        isValidPassword ? (password = true) : (password = false);
        setValid((valid) => ({ ...valid, password: !isValidPassword }));
    }
    const isValidFormLogin = userName && password;
    return isValidFormLogin ? true : false;
}

export default validFormsLogin;
