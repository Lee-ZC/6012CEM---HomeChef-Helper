import React from "react";
import Chart from "react-apexcharts";

const DonutChartComponent = () => {
  const chartData = {
    options: {
      labels: ["Admin", "Normal User"],
    },
    series: [7, 18], // Adjust the values as needed
  };

  return (
    <Chart
      options={{
        labels: chartData.options.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      }}
      series={chartData.series}
      type="donut"
    />
  );
};

export default DonutChartComponent;
