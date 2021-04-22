import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const ChartJS = ({type, data}) => {

const chartData = data;

const chartConfigs = {
  type: type, 
  width: "95%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Most Languege Used",
      subCaption: "Per cent",
      xAxisName: "Langueges",
      // yAxisName: "Reserves (MMbbl)",
      numberSuffix: "%",
      theme: "candy",
      pieRadius: '50%'
    },
    // Chart Data
    data: chartData
  }
};

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default ChartJS
