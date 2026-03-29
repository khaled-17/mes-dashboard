import {
  ChevronDown,
  Save,
  Calendar,
  Clock,
  Leaf,
} from "lucide-react";
import NextImage from "next/image";

export interface PlanningSelections {
  step1: { name: string; function: string };
  step2: { date: string; time: string };
  step3: { machine: string };
  step4: { resources: string[] };
}

interface OperationFormProps {
  activeStep: number;
  selections: PlanningSelections;
  setSelections: (val: PlanningSelections) => void;
  planningMode?: "set-time" | "availability";
}

export default function OperationForm({
  activeStep,
  selections,
  setSelections,
  planningMode,
}: OperationFormProps) {
  const handleFunctionSelect = (func: string) => {
    setSelections({
      ...selections,
      step1: { ...selections.step1, function: func },
    });
  };

  const getStepContent = () => {
    if (planningMode === "availability") {
      switch (activeStep) {
        case 1:
          return 1; // Function
        case 2:
          return 3; // Machine
        case 3:
          return 4; // Resources
        default:
          return 1;
      }
    }
    return activeStep; // In set-time, steps match cases 1, 2, 3, 4
  };

  const renderStepContent = () => {
    const logicalStep = getStepContent();
    switch (logicalStep) {
      case 1:
        return (
          <div className="w-full max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px] flex flex-col items-center">
            <input
              type="text"
              placeholder="Operation Name"
              value={selections.step1.name}
              onChange={(e) =>
                setSelections({
                  ...selections,
                  step1: { ...selections.step1, name: e.target.value },
                })
              }
              className="w-full block py-[18px] px-8 bg-white border border-transparent rounded-[16px] mb-8 shadow-[0px_3px_6px_#00000029] focus:outline-none focus:border-primary/20 focus:ring-4 focus:ring-primary/5 text-[16px] text-[#003F5C] placeholder:text-[#94A3B8] font-roboto font-normal transition-all text-left"
            />

            <div className="w-full bg-white border border-gray-100/50 rounded-[16px] shadow-[0_12px_45px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden h-[340px]">
              <button className="w-full py-6 px-8 border-b border-[#F1F5F9] flex justify-between items-center text-[16px] text-[#003F5C]/80 font-bold hover:bg-slate-50/50 transition-colors">
                Function
                <ChevronDown
                  className="w-5 h-5 text-[#94A3B8]"
                  strokeWidth={2.5}
                />
              </button>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                <div className="flex flex-col">
                  {[
                    "Process Integration",
                    "Quality Control",
                    "Assembly Line",
                    "Inventory Audit",
                    "Shipping Logic",
                  ].map((func, i) => (
                    <div
                      key={i}
                      onClick={() => handleFunctionSelect(func)}
                      className={`py-5 px-8 text-[14px] font-montserrat font-medium cursor-pointer transition-all duration-300 text-left border-b border-gray-50/50 last:border-0 hover:bg-[#CFDEEA]/60 hover:pl-10 ${selections.step1.function === func ? "bg-[#F1F5F9]/60 text-primary" : "text-[#4C788D]/70"}`}
                    >
                      {func}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px] flex flex-col items-center">
            <div className="w-full flex flex-col gap-8">
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#4C788D]/60 group-hover:text-primary transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <select
                  className="w-full h-[60px] pl-16 pr-8 bg-white border-transparent rounded-[166px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] focus:ring-2 focus:ring-primary/20 outline-none appearance-none font-montserrat font-semibold text-[#003F5C] cursor-pointer"
                  onChange={(e) =>
                    setSelections({
                      ...selections,
                      step2: { ...selections.step2, date: e.target.value },
                    })
                  }
                  value={selections.step2.date}
                >
                  <option value="" disabled>
                    Date
                  </option>
                  <option>31 Oct, 2026</option>
                  <option>01 Nov, 2026</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4C788D]/40 pointer-events-none" />
              </div>

              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#4C788D]/60 group-hover:text-primary transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <select
                  className="w-full h-[60px] pl-16 pr-8 bg-white border-transparent rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] focus:ring-2 focus:ring-primary/20 outline-none appearance-none font-montserrat font-semibold text-[#003F5C] cursor-pointer"
                  onChange={(e) =>
                    setSelections({
                      ...selections,
                      step2: { ...selections.step2, time: e.target.value },
                    })
                  }
                  value={selections.step2.time}
                >
                  <option value="" disabled>
                    Time
                  </option>
                  <option>03:00 pm</option>
                  <option>04:30 pm</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4C788D]/40 pointer-events-none" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-[620px] lg:max-w-[750px] 2xl:max-w-[1100px] flex flex-col items-center px-2 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-5 pt-1 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  onClick={() =>
                    setSelections({
                      ...selections,
                      step3: { ...selections.step3, machine: `Machine ${i}` },
                    })
                  }
                  className={`bg-white px-4 py-4 rounded-[18px] shadow-[0_4px_20px_rgb(0,0,0,0.02)] border-2 transition-all cursor-pointer hover:shadow-md hover:scale-[1.01] relative group ${selections.step3.machine === `Machine ${i}` ? "border-primary ring-4 ring-primary/5 shadow-[0_4px_20px_rgba(45,98,237,0.1)]" : "border-transparent"}`}
                >
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_5px_rgba(0,229,255,0.4)]"></span>
                      <span className="text-[#4C788D] text-[9px] font-bold tracking-tight">
                        Machine ID
                      </span>
                    </div>
                    <div className="bg-[#2D62ED] px-2 py-0.5 rounded-full text-white text-[8px] font-bold">
                      OEE 78%
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-[10px] bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 transition-colors">
                      <NextImage
                        src="/planning-section-assets/machine.svg"
                        width={20}
                        height={20}
                        alt="machine"
                        className={`transition-all ${selections.step3.machine === `Machine ${i}` ? "brightness-100" : "opacity-70 group-hover:opacity-100"}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[14px] font-bold text-[#003F5C] leading-none mb-0.5">
                        Machine Name
                      </div>
                      <div className="text-[8px] text-[#4C788D]/60 font-medium tracking-tight">
                        Machine ID description
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50/20 px-2 py-2.5 rounded-[12px] border border-slate-50">
                    <ProgressCircle
                      label="Availability"
                      percent={76}
                      color="#00E5FF"
                    />
                    <ProgressCircle
                      label="Performance"
                      percent={68}
                      color="#2D62ED"
                    />
                    <ProgressCircle
                      label="Quality"
                      percent={68}
                      color="#FF2D6C"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full max-w-[750px] lg:max-w-[850px] 2xl:max-w-[1100px] flex flex-col gap-6 pt-10">
            <div className="flex justify-end pr-0">
              <button
                onClick={() =>
                  setSelections({
                    ...selections,
                    step4: { resources: [...selections.step4.resources, ""] },
                  })
                }
                className="flex items-center gap-3 text-[#5C7D8E] font-roboto font-bold text-[14px] border-2 border-[#5C7D8E]/40 px-6 py-2.5 rounded-[10px] bg-white hover:bg-slate-50 transition-all group active:scale-95 cursor-pointer outline-none"
              >
                <Leaf className="w-4 h-4 text-[#5C7D8E]" strokeWidth={2.5} />
                ADD MATERIAL
              </button>
            </div>

            <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4 md:gap-6">
              {(selections.step4.resources.length > 0
                ? selections.step4.resources
                : ["", ""]
              ).map((resource: string, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center"
                >
                  <div className="flex-1 w-full relative">
                    <select 
                      value={resource || "Resources / Materials"}
                      onChange={(e) => {
                        const currentRes = selections.step4.resources.length > 0 
                          ? [...selections.step4.resources] 
                          : ["", ""];
                        currentRes[idx] = e.target.value;
                        setSelections({
                          ...selections,
                          step4: { ...selections.step4, resources: currentRes }
                        });
                      }}
                      className="w-full h-[58px] pl-8 pr-12 bg-white border-transparent rounded-[16px] shadow-[0_4px_15px_rgba(0,0,10,0.03)] font-bold text-[#003F5C] appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/10 transition-all font-montserrat"
                    >
                      <option disabled value="Resources / Materials">Resources / Materials</option>
                      <option>Steel Sheet 2mm</option>
                      <option>Copper Wire 5m</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4C788D]/40 pointer-events-none" />
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-[120px]">
                      <input
                        type="text"
                        placeholder="Quantity"
                        className="w-full h-[58px] px-6 bg-white border-transparent rounded-[16px] shadow-[0_4px_15px_rgba(0,0,10,0.03)] font-bold text-[#003F5C] outline-none placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-primary/10 transition-all font-montserrat"
                      />
                    </div>
                    <div className="relative flex-1 sm:w-[110px]">
                      <select className="w-full h-[58px] pl-6 pr-10 bg-white border-transparent rounded-[16px] shadow-[0_4px_15px_rgba(0,0,10,0.03)] font-bold text-[#003F5C] appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/10 transition-all font-montserrat">
                        <option>Unit</option>
                        <option>kg</option>
                        <option>m</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4C788D]/40 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const isFinalStep =
    planningMode === "availability" ? activeStep === 3 : activeStep === 4;

  return (
    <div className="flex-1 flex flex-col items-center w-full min-h-[450px]">
      <div className="w-full flex justify-center mb-10 min-h-[400px]">
        {renderStepContent()}
      </div>

      {isFinalStep && (
        <div className="w-full max-w-[900px] flex justify-end items-center gap-4 pr-10">
          {planningMode === "set-time" && (
            <button className="bg-[#003F5C] hover:bg-[#002D42] text-white px-8 py-3.5 rounded-[12px] text-[14px] font-bold flex items-center gap-2.5 shadow-[0_4px_15px_rgba(0,63,92,0.2)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
              <Save className="w-[18px] h-[18px]" strokeWidth={2.5} /> Save
              Route
            </button>
          )}
          <button
            onClick={() => alert("Prototype Saved Successfully!")}
            className={`${planningMode === "availability" ? "bg-[#5C7D8E]" : "bg-[#5C7D8E]"} hover:bg-[#4C6878] text-white px-8 py-3.5 rounded-[12px] text-[14px] font-bold flex items-center gap-2.5 shadow-[0_4px_15px_rgba(92,125,142,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer`}
          >
            <Save className="w-[18px] h-[18px]" strokeWidth={2.5} /> Save
            Prototype
          </button>
        </div>
      )}
    </div>
  );
}

function ProgressCircle({
  label,
  percent,
  color,
}: {
  label: string;
  percent: number;
  color: string;
}) {
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-10 h-10">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          <circle
            className="text-slate-100"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="20"
            cy="20"
          />
          <circle
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke={color}
            fill="transparent"
            r={radius}
            cx="20"
            cy="20"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-[#003F5C]">
          {percent}%
        </span>
      </div>
      <span className="text-[9px] text-[#4C788D]/60 font-bold tracking-tight">
        {label}
      </span>
    </div>
  );
}
