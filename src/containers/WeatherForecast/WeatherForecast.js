import React, { Component } from "react";
import WeatherItems from "../../components/Weather/WeatherItems/WeatherItems";

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
    }
  };
  changeCityHandler = id => {
    const updatedCityId = {
      ...this.state.cityId
    };
    this.setState({ cityId: updatedCityId });
  };
  render() {
    return <WeatherItems next5Days={this.state.next5Days} />;
  }
}

export default WeatherForecast;
