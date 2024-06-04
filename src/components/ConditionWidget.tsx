import React from "react";
import classes from "./assets/css/condition.module.css";
interface ConditionProps {
    options: { value: string; variable: string };
    children: number;
}
const ConditionWidget: React.FC<any> = (props: ConditionProps) => {
    console.log(props);
    return (
        <div className={classes.button_wrapper}>
            <span className={classes.button_text}>show</span>
        </div>
    );
};
export default ConditionWidget;
