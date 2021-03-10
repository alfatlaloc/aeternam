import React from 'react';
import Chart from "react-google-charts";

function DrawChart() {
    return (
        <div id="area">
            <Chart
                className="GGG"
                chartType="CandlestickChart"
                loader={<div> Loading Chart </div>}
                data={
                    [
                        ['day', 'HIGH', 'CLOSE', 'OPEN', 'LOW'],
                        ['Sun', 1.2101, 1.2077, 1.2074, 1.2071],
                        ['Mon', 1.2051, 1.202, 1.2047, 1.2015],
                        ['Tue', 1.2093, 1.2089, 1.2089, 1.2083],
                        ['Wed', 1.2067, 1.2051, 1.2062, 1.2044],
                        ['Thu', 1.1978, 1.1956, 1.1966, 1.1951],
                        ['Fri', 1.1978, 1.1912, 1.1966, 1.1894],

                    ]
                }
                options={
                    {
                        legend: 'none',
                    }
                }
                rootProps={
                    { 'data-testid': '1' }
                }
            />
            <Chart
                className="GGG"
                chartType="LineChart"
                loader={<div> Loading Chart </div>}
                data={
                    [
                        ['x', 'HIGH', 'LOW'],
                        [0, 1.2101, 1.2071],
                        [1, 1.2051, 1.2015],
                        [2, 1.2093, 1.2083],
                        [3, 1.2067, 1.2044],
                        [4, 1.1978, 1.1951],
                        [5, 1.1978, 1.1894],
                    ]
                }
                options={
                    {
                        hAxis: {
                            title: 'Time',
                        },
                        vAxis: {
                            title: 'Price',
                        },
                        series: {
                            1: { curveType: 'function' },
                            0: { curveType: 'function' },
                        },
                    }
                }
                rootProps={
                    { 'data-testid': '2' }
                }
            /> </div>
    );
}

export default DrawChart;