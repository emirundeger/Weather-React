import React from "react";
import classes from "./LocationAndDate.module.css";

const locationAndDate = props => (
  <div className={classes.LocationAndDate}>
    <h1 className={classes.LocationAndDateLocation}>{props.name}</h1>
    <div>{props.date}</div>
  </div>
);

export default locationAndDate;
