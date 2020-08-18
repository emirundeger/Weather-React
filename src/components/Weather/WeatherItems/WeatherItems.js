import React from "react";
import Aux from "../../../hoc/Auxiliary";
import LocationAndDate from "./LocationAndDate/LocationAndDate";
import CurrentTemperature from "./CurrentTemperature/CurrentTemperature";
import CurrentStats from "./CurrentStats/CurrentStats";
import Next5Days from "./Next5Days/Next5Days";

const weatherItems = props => (
  <Aux>
    <LocationAndDate name="London, UK" date="Sunday 4th August" />
    <CurrentTemperature value="21" summary="Mostly Sunny" />
    <CurrentStats
      high="21"
      low="14"
      wind="7mph"
      rain="0%"
      sunrise="05:27"
      sunset="05:27"
    />
    <Next5Days next5Days={props.next5Days} />
  </Aux>
);

export default weatherItems;
