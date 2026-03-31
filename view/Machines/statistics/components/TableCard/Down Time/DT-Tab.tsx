"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  TooltipProps,
} from "recharts";

// ─── Config ───────────────────────────────────────────────────────────────────

const COLORS = {
  powerOff:           "#1e3a5f",
  technicalIssue:     "#1e4d8c",
  humanError:         "#3b82c4",
  missingRawMaterial: "#b8d4ea",
} as const;

type ColorKey = keyof typeof COLORS;

const LEGEND_LABELS: Record<ColorKey, string> = {
  powerOff:           "Power Off",
  technicalIssue:     "Technical Issue",
  humanError:         "Human Error",
  missingRawMaterial: "Missing Row Material",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const data = [
  { name: "Machine\nName", powerOff: 12, technicalIssue: 14, humanError: 8,  missingRawMaterial: 6  },
  { name: "Machine\nName", powerOff: 8,  technicalIssue: 9,  humanError: 5,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 14, technicalIssue: 12, humanError: 6,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 10, technicalIssue: 11, humanError: 6,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 5,  technicalIssue: 5,  humanError: 3,  missingRawMaterial: 2  },
  { name: "Machine\nName", powerOff: 11, technicalIssue: 10, humanError: 6,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 7,  technicalIssue: 7,  humanError: 4,  missingRawMaterial: 2  },
  { name: "Machine\nName", powerOff: 9,  technicalIssue: 11, humanError: 7,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 13, technicalIssue: 12, humanError: 7,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 11, technicalIssue: 11, humanError: 5,  missingRawMaterial: 3  },
  { name: "Machine\nName", powerOff: 8,  technicalIssue: 10, humanError: 5,  missingRawMaterial: 2  },
];

// ─── Custom X-Axis Tick ───────────────────────────────────────────────────────

const CustomXAxisTick = ({
  x,
  y,
  payload,
}: {
  x?: number;
  y?: number;
  payload?: { value: string };
}) => {
  const lines = (payload?.value ?? "").split("\n");
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={0}
          dy={14 + i * 13}
          textAnchor="middle"
          fill="#1d3255"
          fontSize={12}
        >
          {line}
        </text>
      ))}
    </g>
  );
};

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg text-xs">
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-slate-600">
          <span
            className="inline-block h-2.5 w-2.5 rounded-sm shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span>{LEGEND_LABELS[entry.dataKey as ColorKey]}:</span>
          <span className="font-medium text-slate-800">{entry.value}%</span>
        </div>
      ))}
    </div>
  );
};

// ─── Legend ───────────────────────────────────────────────────────────────────

const ChartLegend = () => (
  <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 pt-3 mb-4 sm:mb-6">
    {(Object.keys(COLORS) as ColorKey[]).map((key) => (
      <div key={key} className="flex items-center gap-1.5">
        <span
          className="inline-block h-[4.5px] w-4 sm:w-6 rounded-full"
          style={{ backgroundColor: COLORS[key] }}
        />
        <span className="text-[11px] sm:text-[13px] lg:text-[16px] font-bold text-slate-500">{LEGEND_LABELS[key]}</span>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DownTimeTab() {
  return (
    <>
      <div className="h-[260px] sm:h-[300px] lg:h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 4, left: -16, bottom: 24 }}
            barCategoryGap="38%"
            barGap={0}
          >
            <CartesianGrid vertical={false} stroke="#e2e8f0" />

            {/* Baseline — darker bottom line under all bars */}
            <ReferenceLine y={0} stroke="rgba(60, 89, 138, 0.644)" strokeWidth={2} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
              interval={0}
              height={44}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              domain={[0, 50]}
              ticks={[10, 20, 30, 40, 50]}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(148,163,184,0.08)" }}
            />

            {/* Stack order: bottom → top */}
            <Bar dataKey="missingRawMaterial" stackId="a" fill={COLORS.missingRawMaterial} radius={0} />
            <Bar dataKey="humanError"         stackId="a" fill={COLORS.humanError}         radius={0} />
            <Bar dataKey="technicalIssue"     stackId="a" fill={COLORS.technicalIssue}     radius={0} />
            <Bar dataKey="powerOff"           stackId="a" fill={COLORS.powerOff}           radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ChartLegend />
    </>
  );
}