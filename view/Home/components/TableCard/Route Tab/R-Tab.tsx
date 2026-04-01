// "use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type YAxisTickProps = {
  x?: number | string;
  y?: number | string;
  payload?: { value?: string };
};

type BarShapeLikeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
};

const data = [
  { name: "Route 05", gap: 65, purple: 15, amber: 25 },
  { name: "Route 04", gap: 0, emerald: 5, amber: 10 },
  { name: "Route 03", gap: 30, emerald: 20, amber: 25, cyan: 15 },
  { name: "Route 02", gap: 0, purple: 10, lime: 20, amber: 15 },
  { name: "Route 01", gap: 60, orange: 15, cyan: 10, emerald: 10 },
];

// 1. تخصيص الـ Bar مع البوردر الأسود السفلي
const CustomBar = (props: unknown) => {
  const { x, y, width, height, fill } = (props as BarShapeLikeProps) ?? {};
  if (fill === "transparent") return <g />;

  return (
    <g>
      <rect
        x={x ?? 0}
        y={y ?? 0}
        width={width ?? 0}
        height={height ?? 0}
        fill={fill}
        rx={2}
      />
      {/* الخط الأسود اللي تحت */}
      <rect
        x={x ?? 0}
        y={(y ?? 0) + (height ?? 0) + 2}
        width={width ?? 0}
        height={3.5}
        fill="#0f172a"
      />
    </g>
  );
};

// 2. تخصيص شكل أسماء الـ Routes عشان تطلع Bold وعلى سطر واحد
const CustomYAxisTick = (props: YAxisTickProps) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x ?? 0},${y ?? 0})`}>
      <text
        x={-10} // المسافة بين النص والخط الرأسي
        y={5}
        fill="#1e293b"
        textAnchor="end"
        className="text-[16px] font-extrabold uppercase"
      >
        {payload?.value ?? ""}
      </text>
    </g>
  );
};

const RouteTab = () => {
  return (
    <div className="w-full flex flex-col gap-12 pb-10 pt-20">
      {/* Container الـ Chart */}
      <div className="relative w-full h-80">
        {/* الخط الرأسي الفاصل - محطوط بالظبط عند نهاية الـ YAxis */}
        <div className="absolute left-27.5 top-0 bottom-15 w-0.5 bg-slate-400 z-10" />

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
            barSize={8} // سمك الـ Chart
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#D0D7DA"
              strokeWidth={0.5}
            />

            {/* X-Axis (التواريخ) */}
            <XAxis
              type="number"
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              ticks={[15, 35, 50, 65, 80, 95]}
              tick={(props) => {
                const { x, y, payload } = props;
                const labels: Record<number, string> = {
                  15: "Today",
                  35: "03-28",
                  50: "03-29",
                  65: "03-30",
                  80: "04-01",
                  95: "05-02",
                };
                return (
                  <text
                    x={x as number}
                    y={(y as number) + 30}
                    fill="#D0D7DA"
                    fontSize={16}
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {labels[payload.value]}
                  </text>
                );
              }}
            />

            {/* Y-Axis (الأسماء) - هي اللي هتضمن المحاذاة */}
            <YAxis
              dataKey="name"
              type="category"
              width={110} // نفس مسافة الخط الرأسي
              tick={CustomYAxisTick}
              axisLine={false}
              tickLine={false}
            />

            {/* Bars */}
            <Bar dataKey="gap" stackId="a" fill="transparent" />
            <Bar dataKey="lime" stackId="a" fill="#9DC44D" shape={CustomBar} />
            <Bar
              dataKey="orange"
              stackId="a"
              fill="#F27444"
              shape={CustomBar}
            />
            <Bar
              dataKey="emerald"
              stackId="a"
              fill="#26C281"
              shape={CustomBar}
            />
            <Bar
              dataKey="purple"
              stackId="a"
              fill="#7D4B8E"
              shape={CustomBar}
            />
            <Bar dataKey="cyan" stackId="a" fill="#33C2E1" shape={CustomBar} />
            <Bar dataKey="amber" stackId="a" fill="#FFB319" shape={CustomBar} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Legend محسّن وكبير */}
      <div className="flex flex-wrap justify-end items-end gap-x-6 gap-y-6 pl-10">
        <LegendItem color="#9DC44D" label="Drawing" />
        <LegendItem color="#F27444" label="Drawing" />
        <LegendItem color="#26C281" label="Drawing" />
        <LegendItem color="#7D4B8E" label="Drawing" />
        <LegendItem color="#33C2E1" label="Assembly-Armoring" />
        <LegendItem color="#FFB319" label="Assembly" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div
      style={{ backgroundColor: color }}
      className="w-12 h-1.5 rounded-full"
    />
    <span className="text-[16px] font-bold text-slate-900 whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default RouteTab;
