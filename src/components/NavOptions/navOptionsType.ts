import { Dispatch, SetStateAction } from "react";

export type navOptionsType = {
    fn: React.Dispatch<React.SetStateAction<JSX.Element>>;
    visDisplay: React.Dispatch<React.SetStateAction<string>>;
};
