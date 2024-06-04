import React, { useEffect, useState } from "react";
import classes from "./assets/css/weather.module.css";
interface WeatherProps {
    lon: number;
    lat: number;
}

const Weather: React.FC<any> = (props: WeatherProps) => {
    const { lon, lat } = props;
    const [info, setInfo] = useState<{
        lon: string;
        lat: string;
        condition: string;
        temperature: number;
        unit: string;
        location: string;
        upcomming: { day: string; condition: string; conditionName: string }[];
    } | null>(null);

    useEffect(() => {
        if (lon && lat) {
            fetch(`http://localhost:3030/integration/weather?lat=${lat}&lon=${lon}`)
                .then(async (res: any) => await res.json())
                .then((data) => {
                    setInfo(data?.data);
                });
        }
    }, [lon, lat]);
    return (
        info && (
            <div className={classes.widget}>
                <div className={classes.currentWeather_wrapper}>
                    <div className={classes.current_weather_wrapper_cloud} />
                    <div className={classes.currentWeather}>
                        <div className={classes.temperature}>
                            {info.temperature}°{info.unit}
                        </div>
                        <div className={classes.condition}>{info.condition}</div>
                    </div>
                </div>
                <div className={classes.wrapper_weather_widget}>
                    <div className={classes.location}>{info.location}</div>
                    <div className={classes.forecast}>
                        {info?.upcomming?.map((up, index) => {
                            return (
                                <div className={classes.forecastDay} key={index}>
                                    <div className={classes[up.condition]}></div>
                                    <div>{up.day}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    );
};
export default Weather;
