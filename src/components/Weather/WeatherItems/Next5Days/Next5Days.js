import React from "react";
import classes from "./Next5Days.module.css";
import DailyTemperature from "../DailyTemperature/DailyTemperature";

const next5Days = props => {
  const daysArray = [];

  for (let key in props.next5Days) {
    daysArray.push({
      id: key,
      detail: props.next5Days[key]
    });
  }

  let next5DaysTemperature = daysArray.map(element => (
    <DailyTemperature
      key={element.id}
      day={element.detail.day}
      date={element.detail.date}
      low={element.detail.low}
      high={element.detail.high}
      rain={element.detail.rain}
      wind={element.detail.wind}
    />
  ));

  return (
    <div className={classes.Next5Days}>
      <h2 className={classes.Next5DaysHeading}>Next 5 Days</h2>
      <div className={classes.Next5DaysContainer}>{next5DaysTemperature}</div>
    </div>
  );
};

export default next5Days;
