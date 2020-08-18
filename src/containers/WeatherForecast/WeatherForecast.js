import React, { Component } from "react";
import WeatherItems from "../../components/Weather/WeatherItems/WeatherItems";
import Aux from "../../hoc/Auxiliary";
import WeatherSummary from "../../components/WeatherSummary/WeatherSummary";
import Modal from "../../components/UI/Modal/Modal";

class WeatherForecast extends Component {
  state = {
    cityId: 0,
    next5Days: {
      first: {
        day: "Tue",
        date: "30/7",
        low: "10",
        high: "21",
        rain: "3%",
        wind: "12mph"
      },
      second: {
        day: "Wed",
        date: "31/7",
        low: "9",
        high: "18",
        rain: "5%",
        wind: "12mph"
      },
      third: {
        day: "Thu",
        date: "1/8",
        low: "10",
        high: "18",
        rain: "3%",
        wind: "12mph"
      },
      fourth: {
        day: "Fri",
        date: "2/8",
        low: "10",
        high: "15",
        rain: "4%",
        wind: "15mph"
      },
      fifth: {
        day: "Sat",
        date: "3/8",
        low: "9",
        high: "20",
        rain: "3%",
        wind: "12mph"
      }
    },
    summarizing: false
  };
  changeCityHandler = id => {
    const updatedCityId = {
      ...this.state.cityId
    };
    this.setState({ cityId: updatedCityId });
  };
  summarizeHandler = () => {
    this.setState({ summarizing: true });
  };
  summarizeCancelHandler = () => {
    this.setState({ summarizing: false });
  };
  summarizeContinueHandler = () => {
    //this.props.onInitPurchase();
    //this.props.history.push("/checkout");
    alert("You continue");
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.summarizing}
          modalClosed={this.summarizeCancelHandler}
        >
          <WeatherSummary
            cityId={this.state.cityId}
            summarizeCancelled={this.summarizeCancelHandler}
            summarizeContinued={this.summarizeContinueHandler}
          />
        </Modal>
        <WeatherItems
          next5Days={this.state.next5Days}
          summarize={this.summarizeHandler}
        />
      </Aux>
    );
  }
}

export default WeatherForecast;
