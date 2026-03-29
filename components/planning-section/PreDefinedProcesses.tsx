import { RotateCcw } from "lucide-react";
import { PlanningSelections } from "./OperationForm";

const MOCK_PROCESSES = [
  { id: 1, name: "Body Assembly", function: "Assembly Line", resources: "Steel, Bolts", machine: "Robotic Arm A1" },
  { id: 2, name: "Paint Coating", function: "Surface Treatment", resources: "Enamel, Spray", machine: "Painting Booth B2" },
  { id: 3, name: "Quality Check", function: "Inspection", resources: "Sensors, Tags", machine: "Scanner X10" },
  { id: 4, name: "Engine Mount", function: "Integration", resources: "V6 Engine, Clips", machine: "Crane Lift C5" },
  { id: 5, name: "Wiring Harness", function: "Electronics", resources: "Cables, Fuses", machine: "Workstation E3" },
  { id: 6, name: "Safety Test", function: "Validation", resources: "Crash Dummies", machine: "Impact Track S1" },
  { id: 7, name: "Final Polish", function: "Finishing", resources: "Wax, Buffers", machine: "Polisher P9" },
];

interface PreDefinedProcessesProps {
  setActiveStep: (s: number) => void;
  setSelections: (val: PlanningSelections) => void;
  searchQuery: string;
}

export default function PreDefinedProcesses({ setActiveStep, setSelections, searchQuery }: PreDefinedProcessesProps) {
  const filteredProcesses = MOCK_PROCESSES.filter(process => 
    process.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    process.function.toLowerCase().includes(searchQuery.toLowerCase()) ||
    process.machine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProcessClick = (process: typeof MOCK_PROCESSES[0]) => {
    setSelections({
      step1: { name: process.name, function: process.function },
      step2: { date: "31 Oct, 2026", time: "03:00 pm" },
      step3: { machine: process.machine },
      step4: { resources: [process.resources] }
    });
    setActiveStep(1);
  };

  return (
    <div className="w-full xl:max-w-sm 2xl:w-[375px] shrink-0 bg-white rounded-[12px] shadow-[0px_8px_12px_#0000001A] flex flex-col h-auto 2xl:h-[calc(100vh-280px)] min-h-[300px] xl:min-h-[400px] relative z-10 font-sans overflow-hidden">
      <div className="px-6 md:px-8 py-5 md:py-7 border-b border-[#F1F5F9] flex items-center gap-3 text-[#2C3E50] font-medium font-montserrat text-[14px] tracking-wide shrink-0 bg-white sticky top-0 z-20">
        <RotateCcw className="w-5 h-5 text-[#4C788D]/60" strokeWidth={2.5} /> Pre Defined Processes
      </div>
      <div className="flex-1 px-4 md:px-8 py-2 pb-4 overflow-y-auto custom-scrollbar">
        {filteredProcesses.length > 0 ? (
          filteredProcesses.map((process) => (
            <div 
              key={process.id} 
              onClick={() => handleProcessClick(process)}
              className="flex py-5 md:py-6 border-b border-[#F1F5F9] hover:bg-[#CFDEEA]/30 transition-all duration-300 last:border-0 group cursor-pointer -mx-2 md:-mx-4 px-4 md:px-6 rounded-[14px] hover:translate-x-1 outline-none"
            >
              <div className="flex-1 space-y-2 md:space-y-3.5">
                <div className="text-[14px] md:text-[16px] font-bold text-[#003F5C] group-hover:text-primary transition-colors font-roboto tracking-tight">{process.name}</div>
                <div className="text-[9px] md:text-[10px] text-[#4C788D] font-bold">Resources</div>
                <div className="text-[9px] md:text-[10px] text-[#4C788D] font-bold">Machine</div>
              </div>
              <div className="flex-1 space-y-2 md:space-y-3.5 text-right">
                <div className="text-[12px] md:text-[14px] font-normal text-[#003F5C] font-roboto tracking-tight pr-0 md:pr-4">{process.function}</div>
                <div className="text-[10px] md:text-[12px] text-[#003F5C] font-bold pr-0 md:pr-4 truncate ml-auto">{process.resources}</div>
                <div className="text-[10px] md:text-[12px] text-[#003F5C] font-bold pr-0 md:pr-4">{process.machine}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center text-[#4C788D]/60 font-medium italic">
            No processes found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
