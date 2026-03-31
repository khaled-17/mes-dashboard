import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScanBarcode, SlidersHorizontal, Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Charts from "./charts";

export default function TopCards() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {/* Total Production Card */}
      <Card className="min-w-0 h-auto sm:h-52 flex-1 basis-full 1850:basis-[calc(27%-1rem)]">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 sm:gap-3">
            <ScanBarcode className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[14px] sm:text-[16px]">Total Production</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 pt-2 sm:pt-4">
          {/* Top Stats Section */}
          <div className="flex mb-4 sm:mb-8">
            {/* Actual Production */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-[18px] sm:text-[22px] font-semibold text-slate-900">
                  5,000
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-blue-600 mt-0">
                Actual Production
              </p>
            </div>

            {/* Planned Production */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-[18px] sm:text-[22px] font-semibold text-slate-900">
                  7,000
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-gray-400 mt-0">
                Planned Production
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Progress
              value={65}
              style={{ "--progress": 65 } as React.CSSProperties}
              className="h-2 w-full bg-border progress-animate"
            />

            <span className="text-[18px] sm:text-[23px] font-bold text-slate-900 -mt-1.75">
              65%
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Performance Indicator KPI Card */}
      <Card className="min-w-0 h-auto sm:h-52 flex-1 basis-full 1850:basis-[calc(40%-1rem)]">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 sm:gap-3">
            <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[14px] sm:text-[16px]">Performance Indicator KPI</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex items-center justify-center px-2 sm:px-4 pt-2 pb-4 overflow-hidden">
          <Charts />
        </CardContent>
      </Card>

      {/* Material Consumption Card */}
      <Card className="min-w-0 h-auto sm:h-52 flex-1 basis-full 1850:basis-[calc(27%-1rem)]">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 sm:gap-3">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[14px] sm:text-[16px]">Material Consumption</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 pt-2 sm:pt-4">
          {/* Top Stats Section */}
          <div className="flex mb-4 sm:mb-8">
            {/* Planned Consumption */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-[18px] sm:text-[22px] font-semibold text-slate-900">
                  5,000
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-blue-600 mt-1">
                Planned Consumption
              </p>
            </div>

            {/* Planned Supply */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-[18px] sm:text-[22px] font-semibold text-slate-900">
                  7,000
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-gray-400 mt-1">
                Planned Supply
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Progress
              value={75}
              style={{ "--progress": 75 } as React.CSSProperties}
              className="h-2 w-full bg-border progress-animate"
            />

            <span className="text-[18px] sm:text-[23px] font-bold text-slate-900 -mt-1.75">
              75%
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
