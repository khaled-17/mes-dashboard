import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { TooltipProps, LabelProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const data = [
  {
    process: "Process 05",
    route: "Route 05",
    jobOrder: "JobOrder 05",
    ranges: [{ start: 70, end: 100, label: "Material 04", color: "#5b508d" }],
  },
  {
    process: "Process 04",
    route: "Route 04",
    jobOrder: "JobOrder 04",
    ranges: [{ start: 0, end: 15, label: "Material 01", color: "#ce5b7d" }],
  },
  {
    process: "Process 03",
    route: "Route 03",
    jobOrder: "JobOrder 03",
    ranges: [
      { start: 30, end: 40, label: "Material 03", color: "#5b508d" },
      { start: 40, end: 75, label: "Material 04", color: "#00c3e3" },
    ],
  },
  {
    process: "Process 02",
    route: "Route 02",
    jobOrder: "JobOrder 02",
    ranges: [{ start: 0, end: 45, label: "Material 05", color: "#00d0b1" }],
  },
  {
    process: "Process 01",
    route: "Route 01",
    jobOrder: "JobOrder 01",
    ranges: [{ start: 60, end: 90, label: "Material 01", color: "#10314d" }],
  },
];

// Recharts wants a single array. Map unique properties.
const chartData = data.map((item) => ({
  name: item.process,
  route: item.route,
  jobOrder: item.jobOrder,
  range1: [item.ranges[0].start, item.ranges[0].end],
  color1: item.ranges[0].color,
  label1: item.ranges[0].label, // Label for the first bar
  range2: item.ranges[1] ? [item.ranges[1].start, item.ranges[1].end] : null,
  color2: item.ranges[1]?.color,
  label2: item.ranges[1]?.label, // Label for the second bar
}));

type ChartDataItem = {
  name: string;
  range1: [number, number];
  color1: string;
  label1: string;
  range2: [number, number] | null;
  color2?: string;
  label2?: string;
};

const renderCustomLabel = (props: LabelProps) => {
  const { x, y, value } = props;

  return (
    <text
      x={x} // 'x' is the exact starting edge of the bar
      y={y}
      dy={-10} // Space above the bar
      fontSize="11px"
      fontWeight="bold"
      textAnchor="start" // Ensures the text grows to the right from the starting 'x'
      style={{
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "12px",
        fill: "#272D3B", // In SVG, 'fill' is used instead of 'color'
      }}
    >
      {value}
    </text>
  );
};

const customTooltip = ({
  payload,
  active,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const fakeMaterial = {
      type: "Material Type",
      actualConsumption: "300kg",
      plannedConsumption: "240k",
    };

    const overallData = {
      processId: 435366,
      work: 24567899,
      machineName: "Drawing 02",
      orderNumber: 24567899,
      function: "Function Name",
      routeId: 4568900,
    };

    const rawData = payload[0].payload as ChartDataItem;
    const numOfMaterials = [1];
    if (rawData.range2) numOfMaterials.push(2);

    return (
      <div className="bg-white shadow-2xl px-4 py-2 min-w-50">
        {numOfMaterials.map((_, i) => (
          <div key={i}>
            <h4 className="font-bold text-lg mb-2">{fakeMaterial.type}</h4>
            <div className="grid grid-cols-2">
              <div>
                <div className="text-[#8D9192] text-[12px] font-roboto">
                  Actual Consumption
                </div>
                <p className="font-bold text-[12px]">
                  {fakeMaterial.actualConsumption}
                </p>
              </div>
              <div>
                <div className="text-[#8D9192] text-[12px] font-roboto">
                  Planned Consumption
                </div>
                <p className="font-bold text-[12px]">
                  {fakeMaterial.plannedConsumption}
                </p>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        ))}

        <div className="mt-2 flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">
                Process Id
              </div>
              <p className="font-bold text-[12px]">{overallData.processId}</p>
            </div>
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">Work</div>
              <p className="font-bold text-[12px]">{overallData.work}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">
                Machine Name
              </div>
              <p className="font-bold text-[12px]">{overallData.machineName}</p>
            </div>
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">
                Order Number
              </div>
              <p className="font-bold text-[12px]">{overallData.orderNumber}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">
                Function
              </div>
              <p className="font-bold text-[12px]">{overallData.function}</p>
            </div>
            <div>
              <div className="text-[#8D9192] text-[12px] font-roboto">
                Route ID
              </div>
              <p className="font-bold text-[12px]">{overallData.routeId}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const ResourcesChart = ({
  mode,
}: {
  mode?: "routes" | "process" | "job-order";
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: "#fff",
      }}
      className="pb-20 pt-15 pr-10"
    >
      <ResponsiveContainer>
        <ComposedChart
          layout="vertical"
          data={chartData}
          margin={{ bottom: 20, top: 20 }}
          barGap={-20} // This forces bars with the same category to overlap/align
        >
          <CartesianGrid horizontal={true} vertical={false} stroke="#f0f0f0" />

          <XAxis
            type="number"
            ticks={[15, 35, 50, 65, 80, 95]}
            tickLine={false}
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
            stroke="#ccc"
            axisLine={false}
          />
          <YAxis
            dataKey={
              mode === "routes"
                ? "route"
                : mode === "process"
                  ? "name"
                  : "jobOrder"
            }
            type="category"
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

          <Tooltip cursor={{ fill: "transparent" }} content={customTooltip} />

          {/* First Segment Bar (Processes with one material) */}
          <Bar dataKey="range1" barSize={20}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-1-${index}`} fill={entry.color1} />
            ))}
            {/* Label for Range 1 */}
            <LabelList dataKey="label1" content={renderCustomLabel} />
          </Bar>

          {/* Second Segment Bar (Special case for Process 03) */}
          <Bar dataKey="range2" barSize={20}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-2-${index}`}
                fill={entry.color2 || "transparent"}
              />
            ))}
            {/* Label for Range 2 */}
            <LabelList dataKey="label2" content={renderCustomLabel} />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
