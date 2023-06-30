import React, { FC } from "react";
import NotesInputStyle from "./notesInput.style";
import notesInputType from "./notesInputType";

const NotesInput: FC<notesInputType> = ({
    type,
    disabled,
    placeholder,
    required,
    value,
    autocomplete,
    onChange,
    valid,
}) => {
    return (
        <NotesInputStyle
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            value={value}
            autoComplete={autocomplete}
            onChange={onChange}
            valid={valid}
        />
    );
};

export default NotesInput;
