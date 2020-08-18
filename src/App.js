import React from "react";
import Layout from "./components/Layout/Layout";
import WeatherForecast from "./containers/WeatherForecast/WeatherForecast";

function App() {
  return (
    <div>
      <Layout>
        <WeatherForecast />
      </Layout>
    </div>
  );
}

export default App;
