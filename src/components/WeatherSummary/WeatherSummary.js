import React from "react";
import Aux from "../../hoc/Auxiliary";
import Button from "../UI/Button/Button";

const weatherSummary = props => {
  const dailyWeatherSummary = "Daily weather summary";

  return (
    <Aux>
      <h3>Your daily weather forecast</h3>
      <p>Daily Details</p>
      {dailyWeatherSummary}
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.summarizeCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.summarizeContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default weatherSummary;
