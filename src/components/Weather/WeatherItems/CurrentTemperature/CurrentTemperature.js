import React from "react";
import classes from "./CurrentTemperature.module.css";
import mostlySunnyImage from "../../../../assets/images/mostly-sunny.svg";

const currentTemperature = props => (
  <div className={classes.CurrentTemperature}>
    <div className={classes.CurrentTemperatureIconContainer}>
      <img className={classes.CurrentTemperatureIcon} src={mostlySunnyImage} />
    </div>
    <div className={classes.CurrentTemperatureContentContainer}>
      <div className={classes.CurrentTemperatureValue}>{props.value}</div>
      <div className={classes.CurrentTemperatureSummary}>{props.summary}</div>
    </div>
  </div>
);

export default currentTemperature;
