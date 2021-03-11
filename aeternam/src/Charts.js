import React from "react";
import Chart from "react-google-charts";
import * as EURUSDApi from "./API/EURUSD";
import { useEffect, useState } from "react";

function DrawChart() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    if (Data.length === 0) {
      EURUSDApi.getPerYear().then((Info) => {
        setData(Info);
      });
    }
  });

  function toCandlestick(RowNames){
    let auxArr = new Array();
    auxArr[0]=RowNames;
    var i = 1;
    Data.forEach(item => {
      auxArr[i++]= [item.keyName,item.High,item.Close,item.Open,item.Low];
    });
    console.log(auxArr);
    return auxArr;
  }

  return (
    <div id="area">
      <Chart
        className="GGG"
        chartType="CandlestickChart"
        loader={<div> Loading Chart </div>}
        data={toCandlestick(['day', 'HIGH', 'CLOSE', 'OPEN', 'LOW'])}
        options={{
          legend: "none",
        }}
        rootProps={{ "data-testid": "1" }}
      />{" "}
      <Chart
        className="GGG"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={toCandlestick(['day', 'HIGH', 'CLOSE', 'OPEN', 'LOW'])}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Price",
          },
          series: {
            1: { curveType: "function" },
            0: { curveType: "function" },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default DrawChart;
