import React, { FC, useEffect, useState } from "react";
import {
    IsDoneGroupBtnStyle,
    IsDoneGroupInputStyle,
    IsDoneGroupStyle,
    NoteStyle,
    TextIsDoneStyle,
    TextStyle,
    TitleNoteStyle,
} from "./note.style";
import { noteType } from "./noteType";
import { VerticalStrip } from "../../pages/Options/options.style";
import NotesInput from "../basic/input/NotesInput";
import NotesButton from "../basic/button/NotesButton";
import axiosQuery, { NEW_NOTE_URL } from "../../api/AxiosQuery";

const Note: FC<noteType> = (data: noteType) => {
    const [opacityCheckbox, setOpacityCheckbox] = useState(0);
    const [display, setDisplay] = useState(Boolean(data.done));
    const [displayNote, setDisplayNote] = useState("flex");

    function checkBox(e: Event) {
        const CheckBoxElement = e.target as HTMLInputElement;
        if (CheckBoxElement) {
            setDisplay(true);
            axiosQuery.axiosQueryPut({ ...data, done: true }, NEW_NOTE_URL);
        }
    }

    async function deleteNote() {
        await axiosQuery.axiosQueryDelete({ id: data.id }, NEW_NOTE_URL);
    }
    useEffect(() => {
        if (display === true) setOpacityCheckbox(1);
    }, [display]);
    return (
        <NoteStyle
            backgroundColor={data.color}
            opacity={display.toString()}
            display={displayNote}
            onClick={() => {
                if (display === true) return;
                opacityCheckbox === 0
                    ? setOpacityCheckbox(1)
                    : setOpacityCheckbox(0);
            }}
        >
            <TitleNoteStyle>{data.name.toUpperCase()}</TitleNoteStyle>
            {data.textarea !== "" && (
                <>
                    <VerticalStrip />
                    <TextStyle>{data.textarea}</TextStyle>
                </>
            )}
            <IsDoneGroupStyle checkboxOpacity={opacityCheckbox}>
                <IsDoneGroupInputStyle display={display.toString()}>
                    <NotesInput
                        type="checkbox"
                        onChange={(e) => {
                            checkBox(e);
                        }}
                    />
                    <TextIsDoneStyle>is Done?</TextIsDoneStyle>
                </IsDoneGroupInputStyle>
                <IsDoneGroupBtnStyle display={display.toString()}>
                    <NotesButton
                        onClick={() => {
                            deleteNote();
                            setDisplayNote("none");
                        }}
                    >
                        X
                    </NotesButton>
                </IsDoneGroupBtnStyle>
            </IsDoneGroupStyle>
        </NoteStyle>
    );
};

export default Note;
