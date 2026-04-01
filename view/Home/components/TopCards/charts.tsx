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

function Charts() {
  return (
    <>
        <div className="flex-1 flex flex-col items-center">
            <ChartContainer config={chartConfig} className="aspect-square h-25">
            <RadialBarChart
                data={chartData1}
                startAngle={90}
                endAngle={-180}
                innerRadius={35}
                outerRadius={50}
            >
                <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[38, 30]}
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
                            className="fill-foreground text-[21px] font-bold"
                            >
                            {chartData1[0].visitors.toLocaleString()}%
                            </tspan>
                            <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                            ></tspan>
                        </text>
                        );
                    }
                    }}
                />
                </PolarRadiusAxis>
            </RadialBarChart>
            </ChartContainer>
            <p className="font-bold text-[16px] -mt-2">Availability</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
            <ChartContainer config={chartConfig} className="aspect-square h-25">
            <RadialBarChart
                data={chartData2}
                startAngle={90}
                endAngle={-140}
                innerRadius={35}
                outerRadius={50}
            >
                <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[38, 30]}
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
                            className="fill-foreground text-[21px] font-bold"
                            >
                            {chartData2[0].visitors.toLocaleString()}%
                            </tspan>
                            <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                            ></tspan>
                        </text>
                        );
                    }
                    }}
                />
                </PolarRadiusAxis>
            </RadialBarChart>
            </ChartContainer>
            <p className="font-bold text-[16px] -mt-2">Preformance</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
            <ChartContainer config={chartConfig} className="aspect-square h-25">
            <RadialBarChart
                data={chartData3}
                startAngle={90}
                endAngle={0}
                innerRadius={35}
                outerRadius={50}
            >
                <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-gray-200 last:fill-background"
                polarRadius={[38, 30]}
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
                            className="fill-foreground text-[21px] font-bold"
                            >
                            {chartData3[0].visitors.toLocaleString()}%
                            </tspan>
                            <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                            ></tspan>
                        </text>
                        );
                    }
                    }}
                />
                </PolarRadiusAxis>
            </RadialBarChart>
            </ChartContainer>
            <p className="font-bold text-[16px] -mt-2">Quality</p>
        </div>
    </>
  );
}

export default Charts;
