import React from "react";

type notesInputType = {
    type: string;
    accept?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    valid?: boolean;
    onChange?: (e: any) => void;
    registration?: boolean;
};

export default notesInputType;
