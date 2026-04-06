import CustomTableComponent from "./CustomTableComponent";
import { Leaf, Route } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function MaterialConsumptionTable({
  type,
}: {
  type?: "routes production";
}) {
  const numberStyle = "font-medium text-[24px] tracking-[0.48px] leading-5";
  const unitStyle = "font-medium text-[17px] tracking-[0.34px] leading-5";
  return (
    <div
      className={`max-w-125 min-w-0 ${type === "routes production" && "flex"}`}
    >
      <CustomTableComponent
        header={
          <div className="flex gap-2.5 items-center ">
            {type === "routes production" ? (
              <>
                <Route className="size-5.5" /> Total Routes Production
              </>
            ) : (
              <>
                {" "}
                <Leaf className="size-6" /> Total Material Consumption
              </>
            )}
          </div>
        }
        content={
          <div>
            <div className="flex justify-between">
              <div>
                <div>
                  <span className={numberStyle}>5,000</span>{" "}
                  <span className={unitStyle}>KM</span>
                </div>
                <div className="text-primary font-light text-[12px] leading-3.5 tracking-[0.24px]">
                  {type === "routes production" ? (
                    <div>Actual Production</div>
                  ) : (
                    <>
                      <div>Actual Material</div>
                      <div>Weight</div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <span className={numberStyle}>7,000</span>{" "}
                  <span className={unitStyle}>KM</span>
                </div>
                <div className="text-[#9D9D9D] font-light text-[12px] leading-3.5 tracking-[0.24px]">
                  {type === "routes production" ? (
                    <div>Planned Production</div>
                  ) : (
                    <>
                      <div>Planned Material</div>
                      <div>Weight</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className={` ${type === "routes production" ? "mt-10" : "mt-5"} mb-7 flex gap-3 justify-center items-center font-[]`}
            >
              <Progress value={75} className="h-2 bg-[#B2BEC39C]" />
              <span className="text-[24px] font-bold">75%</span>
            </div>
          </div>
        }
      />
    </div>
  );
}
