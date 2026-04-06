import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { LabelProps } from "recharts";

const chartData = [
  {
    job: "Route 05",
    range: [65, 95],
    label: "Process 04",
  },
  {
    job: "Route 04",
    range: [0, 15],
    label: "Process 01",
  },
  {
    job: "Route 03",
    range: [30, 75],
    label: "Process 03",
  },
  {
    job: "Route 02",
    range: [0, 45],
    label: "Process 05",
  },
  {
    job: "Route 01",
    range: [55, 85],
    label: "Process 01",
  },
];

const renderCustomLabelForBars = (props: LabelProps) => {
  const { x, y, value } = props;
  return (
    <text
      x={x}
      y={y}
      dy={-5}
      fill="#333"
      fontSize={12}
      fontWeight={700}
      fontFamily="montserrat"
      textAnchor="start" // Aligns text to the left of the 'x' coordinate
    >
      {value}
    </text>
  );
};

export default function ChartTable() {
  return (
    <div className="w-full h-125">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 100, right: 30, left: 40, bottom: 70 }}
          barSize={12}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray={"3 3"}
          />

          <XAxis
            type={"number"}
            domain={[0, 100]}
            ticks={[10, 25, 40, 55, 70, 85]}
            tickLine={false}
            tick={(props) => {
              const { x, y, payload } = props;
              const labels: Record<number, string> = {
                10: "Today",
                25: "03-28",
                40: "03-29",
                55: "03-30",
                70: "04-01",
                85: "05-02",
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
            stroke="#ccc"
            axisLine={false}
          />

          <YAxis
            type="category"
            dataKey="job"
            axisLine={true}
            width={100}
            tick={{
              fontWeight: "bold",
              fill: "#272D3B",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              textAnchor: "end",
            }}
            tickLine={false}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          <Bar dataKey="range" fill="#0F2E3C" radius={[2, 2, 2, 2]}>
            <LabelList dataKey={"label"} content={renderCustomLabelForBars} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
