import React from "react";
import classes from "./assets/css/image.module.css";
interface ImageProps {
    src: string;
    alt: string;
}
const ImageComponent: React.FC<any> = (props: ImageProps) => {
    return <img src={props.src} alt={props.alt} className={classes.weather_img} />;
};
export default ImageComponent;
