import { validFormType } from "../types/validFormType";

let userName = false,
    password = false;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/,
    passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validFormsLogin(
    data: validFormType,
    validUserName: (value: object) => void,
    validPassword: (value: object) => void
): boolean {
    if (data.userName === "") {
        userName = false;
        validUserName({ userName: true });
    } else {
        const isValidUsername = usernameRegex.test(data.userName);
        isValidUsername ? (userName = true) : (userName = false);
        validUserName({ userName: !isValidUsername });
    }
    if (data.password === "") {
        password = false;
        validPassword({ password: true });
    } else {
        const isValidPassword = passwordRegex.test(data.password);
        isValidPassword ? (password = true) : (password = false);
        validPassword({ password: !isValidPassword });
    }
    const isValidFormLogin = userName && password;
    return isValidFormLogin ? true : false;
}

export default validFormsLogin;
