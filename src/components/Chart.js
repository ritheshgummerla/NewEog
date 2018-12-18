import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

class Chart extends Component {
  render() {
    const chartData = this.props.data;
    let Data = [];
    chartData.filter(item => {
      const date = new Date(item.timestamp);
      const hour = date.getHours(date);
      const minutes = date.getMinutes(date);
      const time = hour + ":" + minutes;
      Data.push({ name: time, uv: item.metric });
    });
    return (
      <div>
        <LineChart
          width={600}
          height={400}
          data={Data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" dy="5" interval={100} />
          <YAxis domain={["240", "auto"]} />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
