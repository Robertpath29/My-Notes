import { validFormType } from "../../types/validFormType";

type formLoginType = {
    dataForm: validFormType;
    setDataForm: React.Dispatch<
        React.SetStateAction<{
            userName: string;
            email: string;
            password: string;
            repeatPassword: string;
        }>
    >;
    submitFormLogin: (
        e: React.MouseEvent<Element, globalThis.MouseEvent>
    ) => Promise<void>;
    background?: boolean;
};
export default formLoginType;
