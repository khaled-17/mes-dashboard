import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScanBarcode, SlidersHorizontal, Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Charts from "./charts";

export default function TopCards() {
  return (
    <>
      <Card className="min-w-70.5 h-60 basis-[27.5%]">
        <CardHeader className="px-6">
          <CardTitle className="flex items-center gap-3 ">
            <ScanBarcode className="w-6 h-6" />
            <span className="text-[18px]">Total Production</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="py-4 ">
          {/* Top Stats Section */}
          <div className="flex mb-8">
            {/* Actual Production */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[25px] font-semibold text-slate-900">
                  5,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[12px] font-medium text-blue-600 mt-1">
                Actual Production
              </p>
            </div>

            {/* Planned Production */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-[25px] font-semibold text-slate-900 ">
                  7,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[12px] font-medium text-gray-400 mt-1">
                Planned Production
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-6">
            <Progress
              value={65}
              style={{ "--progress": 65 } as React.CSSProperties}
              className="h-2 w-60 bg-border progress-animate"
            />

            <span className="text-[25px] font-bold text-slate-900 -mt-1.75">
              65%
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="min-w-129 h-60 basis-[45%]">
        <CardHeader className="px-6">
          <CardTitle className="flex items-center gap-3 ">
            <SlidersHorizontal className="w-6 h-6" />
            <span className="text-[18px]">Performance Indicator KPI</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="py-4 px-6 flex justify-around items-start h-full">
          <Charts />
        </CardContent>
      </Card>

      <Card className="min-w-70.5 h-60 basis-[27.5%]">
        <CardHeader className="px-6">
          <CardTitle className="flex items-center gap-4 ">
            <Leaf className="w-6 h-6" />
            <span className="text-[18px]">Material Consumption</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="py-4 ">
          {/* Top Stats Section */}
          <div className="flex mb-8">
            {/* Actual Production */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[25px] font-semibold text-slate-900">
                  5,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[12px] font-medium text-blue-600 mt-1">
                Planned Consumption
              </p>
            </div>

            {/* Planned Production */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-[25px] font-semibold text-slate-900 ">
                  7,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[12px] font-medium text-gray-400 mt-1">
                Planned Supply
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-6">
            <Progress
              value={75}
              style={{ "--progress": 75 } as React.CSSProperties}
              className="h-2 w-60 bg-border progress-animate"
            />

            <span className="text-[25px] font-bold text-slate-900 -mt-1.75">
              75%
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
