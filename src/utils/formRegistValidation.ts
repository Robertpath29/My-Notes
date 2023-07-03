import { validFormType } from "../types/validFormType";

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
    validUserName: (value: object) => void,
    validPassword: (value: object) => void,
    validEmail: (value: object) => void,
    validRepeatPassword: (value: object) => void,
    validSamePasswords: (value: object) => void
): boolean {
    if (data.userName === "") {
        userName = false;
        validUserName({ userName: true });
    } else {
        const isValidUsername = usernameRegex.test(data.userName);
        isValidUsername ? (userName = true) : (userName = false);
        validUserName({ userName: !isValidUsername });
    }
    if (data.email === "") {
        email = false;
        validEmail({ email: true });
    } else {
        const isValidEmail = emailRegex.test(data.email);
        isValidEmail ? (email = true) : (email = false);
        validEmail({ email: !isValidEmail });
    }
    if (data.password === "") {
        password = false;
        validPassword({ password: true });
    } else {
        const isValidPassword = passwordRegex.test(data.password);
        isValidPassword ? (password = true) : (password = false);
        validPassword({ password: !isValidPassword });
    }
    if (data.repeatPassword === "") {
        repeatPassword = false;
        validRepeatPassword({ repeatPassword: true });
    } else {
        const isValidPassword = passwordRegex.test(data.repeatPassword);
        isValidPassword ? (repeatPassword = true) : (repeatPassword = false);
        validRepeatPassword({ repeatPassword: !isValidPassword });
    }
    if (data.password !== data.repeatPassword) {
        samePasswords = false;
        validSamePasswords({ samePasswords: true });
    } else {
        samePasswords = true;
        validSamePasswords({ samePasswords: false });
    }
    const isValidFormRegistration =
        userName && email && password && repeatPassword && samePasswords;
    return isValidFormRegistration ? true : false;
}

export default validFormsReg;
