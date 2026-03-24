import Image from "next/image";

interface StepSelections {
  step1: {
    function?: string;
  };
  step2: {
    date?: string;
    time?: string;
  };
  step3: {
    machine?: string;
  };
}

interface VerticalStepperProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
  selections: StepSelections;
  planningMode: "set-time" | "availability";
}

export default function VerticalStepper({
  activeStep,
  setActiveStep,
  selections,
  planningMode,
}: VerticalStepperProps) {
  const allSteps = [
    {
      id: 1,
      icon: "function.svg",
      alt: "function",
      label: "Function",
      subLabel: selections.step1.function || "Select Logic",
      logic: "function",
    },
    {
      id: 2,
      icon: "time.svg",
      alt: "time",
      label: "Date | Time",
      subLabel:
        selections.step2.date && selections.step2.time
          ? `${selections.step2.date} | ${selections.step2.time}`
          : "Enter Schedule",
      logic: "time",
    },
    {
      id: 3,
      icon: "machine.svg",
      alt: "rocket",
      label: "Machine",
      subLabel: selections.step3.machine || "Select Machine",
      logic: "machine",
    },
    {
      id: 4,
      icon: "Resources (1).svg",
      alt: "building",
      label: "Resources",
      subLabel: "Add Resources",
      logic: "resources",
    },
  ];

  const steps = allSteps.filter((step) => {
    if (planningMode === "availability" && step.logic === "time") return false;
    return true;
  });

  return (
    <div className="flex items-center gap-2 lg:gap-4 lg:min-w-[240px] w-fit">
      <div
        className="text-[#4C788D] font-bold tracking-widest text-[16px] lg:text-[20px] pt-30 font-roboto"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Operation
      </div>

      <div className="flex flex-col items-center -mt-20">
        {steps.map((step, index) => {
          const displayId = index + 1;
          const isActive = activeStep === displayId;
          const isCompleted = activeStep > displayId;

          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div className="flex items-center group">
                <div
                  onClick={() => {
                    if (displayId <= activeStep) {
                      setActiveStep(displayId);
                    } else if (displayId === activeStep + 1) {
                      setActiveStep(displayId);
                    }
                  }}
                  className={`w-9 h-9 lg:w-10.5 lg:h-10.5 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 transition-all border-2
                    ${
                      isActive
                        ? "bg-[#2D62ED] border-transparent shadow-[0_4px_12px_rgba(46,98,237,0.4)] scale-110"
                        : isCompleted
                          ? "bg-[#2D62ED]/10 border-[#2D62ED] cursor-pointer"
                          : "bg-white border-[#CFDEEA] opacity-40 cursor-pointer"
                    }`}
                >
                  <Image
                    src={`/planning-section-assets/${step.icon}`}
                    width={20}
                    height={20}
                    alt={step.alt}
                    className={`transition-all ${isActive ? "brightness-0 invert" : isCompleted ? "brightness-100 saturate-150" : "opacity-90 grayscale"}`}
                  />
                </div>

                <div
                  className={`absolute left-10 lg:left-16 min-w-[120px] lg:min-w-50px transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : isCompleted ? "opacity-60 translate-x-0" : "opacity-20 translate-x-2"}`}
                >
                  <div
                    className={`font-bold text-[13px] lg:text-[15px] font-roboto leading-none flex items-center gap-1 lg:gap-2 ${isActive ? "text-[#003F5C]" : "text-[#4C788D]"}`}
                  >
                    {step.label}
                  </div>
                  <div
                    className={`text-[10px] lg:text-[12px] font-medium font-montserrat mt-0.5 lg:mt-1 transition-all ${isActive ? "text-[#4C788D]" : "text-[#4C788D]/60"}`}
                  >
                    {step.subLabel}
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-0 h-16 lg:h-21.25 border-l-2 my-1 transition-all
                  ${isCompleted ? "border-solid border-[#2D62ED]" : "border-dashed border-[#4C788DCC]"}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
