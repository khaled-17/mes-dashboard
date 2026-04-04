import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 10, good: 40 },
  { name: 'Machine Name', scrap: 10, good: 40 },
  { name: 'Machine Name', scrap: 30, good: 20 },
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 40, good: 10 },
  { name: 'Machine Name', scrap: 18, good: 32 },
  { name: 'Machine Name', scrap: 18, good: 32 },
];

const COLORS = {
  scrap: '#4F6272',
  good: '#00D7C4',
  grid: '#F0F0F0',
  text: '#556677'
};

// 1. Custom Tick to handle the "Machine Name" wrapping
const CustomXAxisTick = ({ x, y, payload }: { x: number; y: number; payload: { value: string } }) => {
  const parts = payload.value.split(' '); // Splits "Machine Name" into ["Machine", "Name"]
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill={COLORS.text} fontSize={10} fontWeight="800">
        <tspan x="0" dy="1.2em">{parts[0]}</tspan>
        <tspan x="0" dy="1.2em">{parts[1]}</tspan>
      </text>
    </g>
  );
};

const GOODvsScrapTab = () => {
  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] p-2 sm:p-3 lg:p-5 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
          barSize={16}
        >
          <CartesianGrid vertical={false} stroke={COLORS.grid} />
          
          <XAxis 
            dataKey="name" 
            interval={0} 
            tick={<CustomXAxisTick x={0} y={0} payload={{ value: '' }} />} // Using our custom wrap component
            axisLine={{ stroke: '#4F6272', strokeWidth: 1.5 }}
            tickLine={false}
          />
          
          <YAxis 
            domain={[0, 50]} 
            ticks={[0, 10, 20, 30, 40, 50]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#CED4DA', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />

          <Tooltip cursor={{ fill: 'transparent' }} />

          {/* 2. Customizing Legend for wider/thinner rectangles */}
          <Legend 
            verticalAlign="bottom" 
            align="right" 
            iconType="plainline" // Gives us a line/rect base
            iconSize={30}        // Controls width
            wrapperStyle={{ paddingTop: '50px', fontWeight: 'bold', color: COLORS.text }}
            formatter={(value) => <span style={{ color: COLORS.text, marginRight: 20 }}>{value}</span>}
          />

          <Bar dataKey="scrap" stackId="a" fill={COLORS.scrap} name="Scrap" />
          <Bar dataKey="good" stackId="a" fill={COLORS.good} name="Good" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GOODvsScrapTab;