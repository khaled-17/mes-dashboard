"use client";
import { ChartContainer } from "@/components/ui/chart";
import {
  chartConfig,
  chartData1,
  chartData2,
  chartData3,
} from "@/data/chartData";
import {
  RadialBarChart,
  PolarGrid,
  RadialBar,
  PolarRadiusAxis,
  Label,
} from "recharts";
import { Progress } from "@/components/ui/progress";

function Charts() {
  return (
    <div className="flex flex-col w-full gap-1">
      {/* Charts Row */}
      <div className="flex items-center justify-center w-full gap-4 -mb-2 mt-3.5">
        {/* Chart 1 - Availability */}
        <div className="flex items-center gap-2">
          <ChartContainer config={chartConfig} className="aspect-square h-[60px] min-w-[60px]">
            <RadialBarChart
              data={chartData1}
              startAngle={90}
              endAngle={-180}
              innerRadius={22}
              outerRadius={33}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[25, 20]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-[12px] font-bold"
                          >
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <div className="flex flex-col -ml-2">
            <span className="text-[14px] font-bold text-slate-600">Availability</span>
            <span className="text-[18px] font-bold text-slate-900">{chartData1[0].visitors}%</span>
          </div>
        </div>

        {/* Chart 2 - Performance */}
        <div className="flex items-center gap-2">
          <ChartContainer config={chartConfig} className="aspect-square h-[60px] min-w-[60px]">
            <RadialBarChart
              data={chartData1}
              startAngle={90}
              endAngle={-180}
              innerRadius={22}
              outerRadius={33}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[25, 20]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-[12px] font-bold"
                          >
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <div className="flex flex-col -ml-2">
            <span className="text-[14px] font-bold text-slate-600">Performance</span>
            <span className="text-[18px] font-bold text-slate-900">{chartData2[0].visitors}%</span>
          </div>
        </div>

        {/* Chart 3 - Quality */}
        <div className="flex items-center gap-2">
          <ChartContainer config={chartConfig} className="aspect-square h-[60px] min-w-[60px]">
            <RadialBarChart
              data={chartData3}
              startAngle={90}
              endAngle={0}
              innerRadius={22}
              outerRadius={33}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[25, 20]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-[12px] font-bold"
                          >
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
          <div className="flex flex-col -ml-2">
            <span className="text-[14px] font-bold text-slate-600">Quality</span>
            <span className="text-[18px] font-bold text-slate-900">{chartData3[0].visitors}%</span>
          </div>
        </div>
      </div>

      {/* EEO Progress Bar */}
      <div className="flex items-center gap-3 px-2 mt-5">
        <span className="text-[22px] font-bold text-slate-900 whitespace-nowrap -mt-1.75">EEO</span>
        <Progress
          value={65}
          style={{ "--progress": 65 } as React.CSSProperties}
          className="h-2 w-full bg-border progress-animate"
        />
        <span className="text-[22px] font-bold text-slate-900 whitespace-nowrap -mt-1.75">65%</span>
      </div>
    </div>
  );
}

export default Charts;
