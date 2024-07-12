import React from "react";
import classes from "./WeatherInfo.module.css";
import { RootState } from "../types/types";

interface WeatherInfoProps {
  data: RootState;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.icon}>
          <img
            className={classes["weather-icon"]}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="weather-icon"
          />
        </div>
        <div className={classes.details}>
          <h2>{data.name}</h2>
          <h1>{data.main.temp} °</h1>
          <span>{data.weather[0].description.toUpperCase()}</span>
          <hr />
          <div>
            <h4>Wind</h4>
            <span>Speed: {data.wind.speed} </span>
            <span>Deg: {data.wind.deg} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
