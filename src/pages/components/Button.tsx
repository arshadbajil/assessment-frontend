// src/components/Button.tsx
import React from "react";
import classes from "./assets/css/button.module.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
    type: string;
}

const ICONS: any = {
    location: (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                fill="currentColor"
            />
        </svg>
    ),
    show_image: (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
        >
            <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17
   S1,32,1,32z"
            />
            <circle
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                cx="32"
                cy="32"
                r="7"
            />
        </svg>
    ),
    hide_image: (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
        >
            <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17
   S1,32,1,32z"
            />
            <circle
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                cx="32"
                cy="32"
                r="7"
            />
            <line
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                x1="9"
                y1="55"
                x2="55"
                y2="9"
            />
        </svg>
    ),
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
    return (
        <button className={classes.button_wrapper} onClick={onClick}>
            <span className={classes.button_text}>{text}</span>
            <span className={classes.button_text_right}>
                {type === "show_image"
                    ? text === "Show"
                        ? ICONS[type]
                        : ICONS["hide_image"]
                    : (ICONS[type] as any)}
            </span>
        </button>
    );
};

export default Button;
