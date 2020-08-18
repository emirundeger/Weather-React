import React from "react";
import classes from "./CurrentStats.module.css";

const currentStats = props => (
  <div className={classes.CurrentStats}>
    <div>
      <div className={classes.CurrentStatsValue}>{props.high}</div>
      <div className={classes.CurrentStatsLabel}>High</div>
      <div className={classes.CurrentStatsValue}>{props.low}</div>
      <div className={classes.CurrentStatsLabel}>Low</div>
    </div>
    <div>
      <div className={classes.CurrentStatsValue}>{props.wind}</div>
      <div className={classes.CurrentStatsLabel}>Wind</div>
      <div className={classes.CurrentStatsValue}>{props.rain}</div>
      <div className={classes.CurrentStatsLabel}>Rain</div>
    </div>
    <div>
      <div className={classes.CurrentStatsValue}>{props.sunrise}</div>
      <div className={classes.CurrentStatsLabel}>Sunrise</div>
      <div className={classes.CurrentStatsValue}>{props.sunset}</div>
      <div className={classes.CurrentStatsLabel}>Sunset</div>
    </div>
  </div>
);

export default currentStats;
