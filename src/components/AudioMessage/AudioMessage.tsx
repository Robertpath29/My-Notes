import React, { FC, useEffect } from "react";
import { audioMessageType } from "./audioMessageType";

const AudioMessage: FC<audioMessageType> = ({ playAudio, isPlayAudio }) => {
    useEffect(() => {
        const sound = "/sound/new_message_sound.mp3";
        const newSound = new Audio(sound);
        if (playAudio) {
            newSound.remove();
            newSound
                .play()
                .then(() => {})
                .catch((e) => console.log(e.message));
            isPlayAudio(false);
        }
    }, [playAudio]);
    return null;
};

export default AudioMessage;
