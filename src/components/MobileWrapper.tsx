import React from "react";
import classes from "./assets/css/mobilewrapper.module.css";

interface MobileWrapperProps {
    children: any;
}
const MobileWrapper: React.FC<any> = (props: MobileWrapperProps) => {
    return (
        <div className={classes.body}>
            <div className={classes.mobile_wrapper}>{props.children}</div>
        </div>
    );
};
export default MobileWrapper;
