import { useNavigate } from "react-router-dom";

export const useRouter = () => {
    const router = useNavigate();
    function moveTo(address: string): void {
        router(address);
    }

    return { moveTo };
};
