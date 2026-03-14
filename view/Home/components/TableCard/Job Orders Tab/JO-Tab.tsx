"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  LabelProps
} from "recharts";


const data = [
  { job: "Job 05", start: 15, duration: 10, label: "Process 04" },
  { job: "Job 04", start: 0, duration: 3, label: "Route 01" },
  { job: "Job 03", start: 6, duration: 12, label: "Route 03" },
  { job: "Job 02", start: 0, duration: 10, label: "Route 05" },
  { job: "Job 01", start: 13, duration: 9, label: "Process 01" },
];

const BAR_COLOR = "#0f2e44";

export default function JobOrderTab() {

  return (
    <div className="w-full h-95 mt-15 ml-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 30, right: 30, left: 20, bottom: 60 }} // زودنا الـ bottom عشان التواريخ والـ top عشان الـ labels
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} verticalFill={['#fff']} fillOpacity={0.1} />
          
          <XAxis 
            type="number" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#d1d5db', fontSize: 16, fontWeight: 'bold' }}
            ticks={[3, 7, 11, 15, 19, 23]}
            tickFormatter={(value) => {
                if (value === 3) return "Today";
                if (value === 7) return "03-28";
                if (value === 11) return "03-29";
                if (value === 15) return "03-30";
                if (value === 19) return "04-01";
                return "05-02";
            }}
            dy={30}
          />
          
          <YAxis 
            dataKey="job" 
            type="category" 
            axisLine={true}
            tickLine={false}
            width={70}
            tick={{ fill: '#111827', fontWeight: 'bold', fontSize: 18, dx: -10 }}
          />

          <Tooltip content={() => null} cursor={{ fill: 'transparent' }} />

          <Bar dataKey="start" stackId="a" fill="transparent" />
          
          <Bar dataKey="duration" stackId="a" fill={BAR_COLOR}>
            {/* التعديل الجوهري هنا: استخدام content مخصص */}
            <LabelList
              dataKey="label"
              content={(props: LabelProps) => {
                const { x, y, value } = props;

                if (typeof x !== "number" || typeof y !== "number") return null;

                return (
                  <text
                    x={x}
                    y={y - 10}
                    fill="#111827"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="start"
                    dx={10}
                  >
                    {value}
                  </text>
                );
              }}
            />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={BAR_COLOR} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}