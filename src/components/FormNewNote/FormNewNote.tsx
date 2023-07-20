import React, { useState } from "react";
import {
    FormNewNoteStyle,
    GroupBtnFormStyle,
    GroupFormStyle,
    GroupWarningMessageStyle,
    NamesFormInput,
    TextareaStyle,
} from "./formNewNote.style";
import NotesInput from "../basic/input/NotesInput";
import NotesButton from "../basic/button/NotesButton";
import { submitFormNewNoteType } from "./formNewNoteType";
import WarningMessage from "../basic/warning_message/WarningMessage";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Loading from "../basic/loading/Loading";
import { useSubmitFormNewNote } from "../../hooks/useSubmitFormNewNote";

const FormNewNote = () => {
    const [data, setData] = useState({
        name: "",
        textarea: "",
        color: "#ffffff",
    });
    const { isLoading } = useSelector((state: reducersType) => state.loading);

    const [warning, isWarning] = useState(false);
    const { submitFormNewNote } = useSubmitFormNewNote();
    return (
        <FormNewNoteStyle>
            <GroupFormStyle>
                <GroupWarningMessageStyle>
                    <NotesInput
                        type="text"
                        placeholder="Name note"
                        value={data.name}
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                            isWarning(false);
                        }}
                    />
                    <WarningMessage none={warning}>
                        A note cannot be without a title!
                    </WarningMessage>
                </GroupWarningMessageStyle>
                <TextareaStyle
                    rows={10}
                    cols={30}
                    value={data.textarea}
                    onChange={(e) =>
                        setData({ ...data, textarea: e.target.value })
                    }
                    placeholder="to buy bread..."
                />
            </GroupFormStyle>
            <GroupFormStyle>
                <NamesFormInput>Change background color note:</NamesFormInput>
                <NotesInput
                    type="color"
                    value={data.color}
                    onChange={(e) =>
                        setData({ ...data, color: e.target.value })
                    }
                />
            </GroupFormStyle>
            <GroupBtnFormStyle>
                {isLoading ? (
                    <Loading />
                ) : (
                    <NotesButton
                        onClick={(e) => {
                            e.preventDefault();
                            submitFormNewNote(data, isWarning);
                        }}
                    >
                        Add note
                    </NotesButton>
                )}
            </GroupBtnFormStyle>
        </FormNewNoteStyle>
    );
};

export default FormNewNote;
