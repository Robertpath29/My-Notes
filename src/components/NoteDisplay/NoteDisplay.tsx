import React, { useCallback, useEffect, useState } from "react";
import {
    CleanTableGroup,
    CleanTableImgGroup,
    CleanTableTitleGroup,
    NoteDisplayStyle,
    SelectStyle,
} from "./noteDisplay.style";
import axiosQuery, { NEW_NOTE_URL } from "../../api/AxiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { noteType } from "../Note/noteType";
import Note from "../Note/Note";
import NotesButton from "../basic/button/NotesButton";

const NoteDisplay = () => {
    const [note, setNote] = useState<noteType[]>([]);
    const [select, setSelect] = useState("Are performed");
    const { id } = useSelector((state: reducersType) => state.user);
    const getNotes = useCallback(async () => {
        const response = await axiosQuery.axiosQueryGet(
            { user_id: id, select: select },
            NEW_NOTE_URL
        );

        setNote(response.data);
    }, [id, select]);
    useEffect(() => {
        getNotes();
    }, [getNotes, select]);

    return (
        <NoteDisplayStyle>
            <SelectStyle
                defaultValue={"Are performed"}
                onChange={(e) => {
                    setSelect(e.target.value);
                }}
            >
                <option value="All">All</option>
                <option value="Are performed">Are performed</option>
                <option value="Done">Done</option>
            </SelectStyle>
            {note.map((note) => (
                <Note
                    id={note.id}
                    color={note.color}
                    done={note.done}
                    name={note.name}
                    textarea={note.textarea}
                    key={note.id}
                />
            ))}
            {note.length === 0 && (
                <CleanTableGroup>
                    <CleanTableTitleGroup>Has no notes...</CleanTableTitleGroup>
                    <CleanTableImgGroup src="/images/clean-table.gif" />
                </CleanTableGroup>
            )}
        </NoteDisplayStyle>
    );
};

export default NoteDisplay;
