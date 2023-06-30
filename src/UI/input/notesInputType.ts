import React from "react";

type notesInputType = {
    type: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
    valid?: boolean;
    onChange?: (e: any) => void;
};

export default notesInputType;
