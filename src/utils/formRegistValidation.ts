import {
    useValidFormType,
    validFormType,
} from "../types/validationForm/validFormType";

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
        if (isValidUsername) {
            userName = true;
        } else {
            userName = false;
        }
        setValid((valid) => ({ ...valid, userName: !isValidUsername }));
    }
    if (data.email === "") {
        email = false;
        setValid((valid) => ({ ...valid, email: true }));
    } else {
        const isValidEmail = emailRegex.test(data.email);
        if (isValidEmail) {
            email = true;
        } else {
            email = false;
        }
        setValid((valid) => ({ ...valid, email: !isValidEmail }));
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
    if (data.repeatPassword === "") {
        repeatPassword = false;
        setValid((valid) => ({ ...valid, repeatPassword: true }));
    } else {
        const isValidPassword = passwordRegex.test(data.repeatPassword);
        if (isValidPassword) {
            repeatPassword = true;
        } else {
            repeatPassword = false;
        }
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

    if (userName && email && password && repeatPassword && samePasswords) {
        return true;
    } else {
        return false;
    }
}

export default validFormsReg;
