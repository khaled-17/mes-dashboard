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
      <div className="flex items-center justify-evenly w-full gap-2 mb-3 ">
        {/* Chart 1 - Availability */}
        <div className="flex items-center gap-1">
          <ChartContainer config={chartConfig} className="aspect-square h-[50px] sm:h-[60px] lg:h-[70px] xl:h-[75px] min-w-[50px] sm:min-w-[60px] lg:min-w-[70px] xl:min-w-[75px]">
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
          <div className="flex flex-col -ml-1 sm:-ml-2 lg:-ml-3">
            <span className="text-[11px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-600">Availability</span>
            <span className="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-bold text-slate-900">{chartData1[0].visitors}%</span>
          </div>
        </div>

        {/* Chart 2 - Performance */}
        <div className="flex items-center gap-1">
          <ChartContainer config={chartConfig} className="aspect-square h-[50px] sm:h-[60px] lg:h-[70px] xl:h-[75px] min-w-[50px] sm:min-w-[60px] lg:min-w-[70px] xl:min-w-[75px]">
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
          <div className="flex flex-col -ml-1 sm:-ml-2 lg:-ml-3">
            <span className="text-[11px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-600">Performance</span>
            <span className="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-bold text-slate-900">{chartData2[0].visitors}%</span>
          </div>
        </div>

        {/* Chart 3 - Quality */}
        <div className="flex items-center gap-1">
          <ChartContainer config={chartConfig} className="aspect-square h-[50px] sm:h-[60px] lg:h-[70px] xl:h-[75px] min-w-[50px] sm:min-w-[60px] lg:min-w-[70px] xl:min-w-[75px]">
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
          <div className="flex flex-col -ml-1 sm:-ml-2 lg:-ml-3">
            <span className="text-[11px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-600">Quality</span>
            <span className="text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-bold text-slate-900">{chartData3[0].visitors}%</span>
          </div>
        </div>
      </div>

      {/* EEO Progress Bar */}
      <div className="flex items-center gap-2 px-1">
        <span className="text-[16px] sm:text-[22px] lg:text-[24px] font-bold text-slate-900 whitespace-nowrap -mt-1.75">EEO</span>
        <Progress
          value={65}
          style={{ "--progress": 65 } as React.CSSProperties}
          className="h-2 w-full bg-border progress-animate"
        />
        <span className="text-[16px] sm:text-[22px] lg:text-[24px] font-bold text-slate-900 whitespace-nowrap -mt-1.75">65%</span>
      </div>
    </div>
  );
}

export default Charts;

