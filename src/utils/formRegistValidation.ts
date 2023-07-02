import { useValidFormType, validFormType } from "../types/validFormType";

let userName = false,
    email = false,
    password = false,
    repeatPassword = false,
    samePasswords = false;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/,
    emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validFormsReg(
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
    if (data.email === "") {
        email = false;
        setValid((valid) => ({ ...valid, email: true }));
    } else {
        const isValidEmail = emailRegex.test(data.email);
        isValidEmail ? (email = true) : (email = false);
        setValid((valid) => ({ ...valid, email: !isValidEmail }));
    }
    if (data.password === "") {
        password = false;
        setValid((valid) => ({ ...valid, password: true }));
    } else {
        const isValidPassword = passwordRegex.test(data.password);
        isValidPassword ? (password = true) : (password = false);
        setValid((valid) => ({ ...valid, password: !isValidPassword }));
    }
    if (data.repeatPassword === "") {
        repeatPassword = false;
        setValid((valid) => ({ ...valid, repeatPassword: true }));
    } else {
        const isValidPassword = passwordRegex.test(data.repeatPassword);
        isValidPassword ? (repeatPassword = true) : (repeatPassword = false);
        setValid((valid) => ({
            ...valid,
            repeatPassword: !isValidPassword,
        }));
    }
    if (data.password !== data.repeatPassword) {
        samePasswords = false;
        setValid((valid) => ({ ...valid, samePasswords: true }));
    } else {
        samePasswords = true;
        setValid((valid) => ({ ...valid, samePasswords: false }));
    }
    const isValidFormRegistration =
        userName && email && password && repeatPassword && samePasswords;
    return isValidFormRegistration ? true : false;
}

export default validFormsReg;
