import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {
  const chartData = {
    options: {
      xaxis: {
        categories: ["2016", "2017", "2018", "2019"],
        title: {
          text: "Year",
        },
      },
      yaxis: {
        title: {
          text: "Total Recipe Submitted",
        },
      },
    },
    series: [
      {
        name: "Total Recipe Submitted",
        data: [707, 400, 200, 0],
      },
    ],
  };

  return (
    <Chart options={chartData.options} series={chartData.series} type="line" />
  );
};

export default ChartComponent;
