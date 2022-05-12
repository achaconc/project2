import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';


const Chart = (props) => {

const tooltipLabelFormatter = value => `Hora: ${value}:00h`;
const formatYAxis = value => (value % 6 === 0 || value === 23) ? `${value}h` : '';

  return (
    <div>
      <AreaChart
        width={450}
        height={200}
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tickFormatter={formatYAxis} interval={0}/>
        <YAxis domain={[0, 0.25]}/>
        <Tooltip labelFormatter={tooltipLabelFormatter} />
        <Area
          type="monotone"
          dataKey="Precio"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
}

export default Chart;