import { Plus } from "lucide-react";

interface RouteTimelineProps {
  activeRouteStep: number;
  setActiveRouteStep: (s: number) => void;
  routeSteps: number[];
  onAddStep: () => void;
  activeStep: number;
  planningMode: "set-time" | "availability";
}

export default function RouteTimeline({
  setActiveRouteStep,
  routeSteps,
  onAddStep,
  activeStep,
  planningMode,
}: RouteTimelineProps) {
  const maxSteps = planningMode === "availability" ? 3 : 4;
  const isFinalStep = activeStep === maxSteps;
  const showDashedHighlight = activeStep >= (planningMode === "availability" ? 2 : 3);
  return (
    <>
      <div className="text-[#4C788D] font-bold mb-8 tracking-[0.2em] text-[20px] font-roboto uppercase">
        ROUTE
      </div>

      {/* Horizontal Timeline */}
      <div className="flex items-center justify-start xl:justify-center mb-10 md:mb-16 w-full px-4 md:px-8 xl:px-12 overflow-x-auto custom-scrollbar pb-8 lg:pb-8">
        <div className="flex items-center shrink-0 min-w-max">
          {routeSteps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                onClick={() => setActiveRouteStep(step)}
                className={`w-[34px] h-[34px] md:w-[42px] md:h-[42px] shrink-0 rounded-full flex items-center justify-center font-extrabold transition-all cursor-pointer text-[12px] md:text-[15px]
                  ${
                    activeStep > step
                      ? "bg-primary text-white shadow-[0_4px_15px_rgba(46,98,237,0.25)] scale-105"
                      : activeStep === step
                        ? "bg-primary text-white"
                        : "bg-white text-[#4C788DCC] border-2 border-[#CFDEEA]"
                  }`}
              >
                {step}
              </div>
              {index < routeSteps.length - 1 && (
                <div
                  className={`w-[30px] md:w-[60px] lg:w-[80px] h-[2px] md:h-[2.5px] mx-1 md:mx-3 rounded-full transition-colors ${activeStep > step ? "bg-primary" : "bg-[#4C788DCC]"}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`flex-1 border-t-2 md:border-t-[3.5px] border-dashed mx-3 md:mx-6 min-w-[20px] md:min-w-[50px] lg:min-w-[100px] shrink-0 xl:shrink transition-colors ${showDashedHighlight ? "border-primary" : "border-[#4C788DCC]"}`}
        ></div>

        <button
          onClick={onAddStep}
          className={`bg-white shrink-0 border border-slate-100 text-[#4C788D] rounded-l-[20px] md:rounded-l-[24px] rounded-r-[8px] px-3 md:px-5 py-[6px] md:py-[10px] text-[13px] md:text-[18px] font-bold font-roboto tracking-wide flex items-center gap-2 md:gap-3 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.12)] transition-all group cursor-pointer active:scale-95 translate-y-0
            ${isFinalStep ? "border-primary/30" : ""}`}
        >
          <Plus
            className={`w-[14px] h-[14px] md:w-[18px] md:h-[18px] stroke-4 transition-transform group-hover:scale-110 ${isFinalStep ? "text-[#2D62ED]" : "text-[#4C788D]"}`}
          />{" "}
          Add Operation
        </button>
      </div>
    </>
  );
}
