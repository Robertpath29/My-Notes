import axiosQuery, { NEW_NOTE_URL } from "../api/AxiosQuery";
import { submitFormNewNoteType } from "../components/FormNewNote/formNewNoteType";
import { useAction } from "./useAction";
import { useRouter } from "./useRouter";

export const useSubmitFormNewNote = () => {
    const { moveTo } = useRouter();
    const { stateLoading } = useAction();

    async function submitFormNewNote(
        data: submitFormNewNoteType,
        isWarning: React.Dispatch<React.SetStateAction<boolean>>
    ) {
        if (data.name === "") {
            isWarning(true);
            return;
        }
        stateLoading(true);
        const response = await axiosQuery.axiosQueryPost(data, NEW_NOTE_URL);
        if (response) {
            stateLoading(false);
            moveTo("/my-notes");
        }
    }

    return { submitFormNewNote };
};
