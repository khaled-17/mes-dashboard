import { Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "@/components/ui/progress";


const ResourcesCart = () => {
  return (
    <Card className="min-w-0 h-52 flex-1 basis-full sm:basis-[calc(50%-0.75rem)] xl:basis-[calc(27%-1rem)]">
        <CardHeader className="px-6">
          <CardTitle className="flex items-center gap-4 ">
            <Leaf className="w-5 h-5" />
            <span className="text-[16px]">Material Consumption</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-4 ">
          {/* Top Stats Section */}
          <div className="flex mb-8">
            {/* Actual Production */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-semibold text-slate-900">
                  5,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-blue-600 mt-1">
                Planned Consumption
              </p>
            </div>

            {/* Planned Production */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-semibold text-slate-900 ">
                  7,000
                </span>
                <span className="text-sm font-semibold text-slate-900">KM</span>
              </div>
              <p className="text-[10px] font-medium text-gray-400 mt-1">
                Planned Supply
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-4">
            <Progress
              value={75}
              style={{ "--progress": 75 } as React.CSSProperties}
              className="h-2 w-full bg-border progress-animate"
            />

            <span className="text-[23px] font-bold text-slate-900 -mt-1.75">
              75%
            </span>
          </div>
        </CardContent>
      </Card>
  )
}

export default ResourcesCart