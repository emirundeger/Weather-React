import React from "react";
import classes from "./DailyTemperature.module.css";
import WeatherImage from "../WeatherImage/WeatherImage";

const dailyTemperature = props => (
  <div className={classes.Next5DaysRow}>
    <div className={classes.Next5DaysDate}>
      {props.day}
      <div className={classes.Next5DaysLabel}>{props.date}</div>
    </div>
    <div className={classes.Next5DaysLow}>
      {props.low}
      <div className={classes.Next5DaysLabel}>Low</div>
    </div>
    <div className={classes.Next5DaysHigh}>
      {props.high}
      <div className={classes.Next5DaysLabel}>High</div>
    </div>
    <div className={classes.Next5DaysIcon}>
      <WeatherImage />
    </div>
    <div className={classes.Next5DaysRain}>
      {props.rain}
      <div className={classes.Next5DaysLabel}>Rain</div>
    </div>
    <div className={classes.Next5DaysWind}>
      {props.wind}
      <div className={classes.Next5DaysLabel}>Wind</div>
    </div>
  </div>
);

export default dailyTemperature;
