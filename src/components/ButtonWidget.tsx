import React from "react";
import classes from "./assets/css/button.module.css";

const ButtonWidget: React.FC<any> = () => {
    return (
        <button className={classes.button_wrapper}>
            <span className={classes.button_text}>show</span>
        </button>
    );
};
export default ButtonWidget;
