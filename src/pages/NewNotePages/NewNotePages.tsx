import React from "react";
import { NewNotePagesStyle } from "./newNotePages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { useRouter } from "../../hooks/useRouter";
import Header from "../../components/Header/Header";

const NewNotePages = () => {
    const userData = useSelector((store: reducersType) => store.user);
    const { moveTo } = useRouter();
    return (
        <NewNotePagesStyle>
            <Header
                userName={userData.login}
                nameBtnOptions="Options"
                fnBtnOptions={() => {
                    moveTo("/my-notes/options");
                }}
                nameBtnNewNote="Main page"
                fnBtnNewNote={() => {
                    moveTo("/my-notes");
                }}
            />
        </NewNotePagesStyle>
    );
};

export default NewNotePages;
