import { RotateCcw } from "lucide-react";

export default function PreDefinedProcesses() {
  return (
    <div className="w-[375px] shrink-0 bg-white rounded-[8px] shadow-[0px_8px_12px_#0000001A] flex flex-col h-[calc(100vh-280px)] relative z-10 font-sans">
      <div className="px-8 py-7 border-b border-[#F1F5F9] flex items-center gap-3 text-[#2C3E50] font-medium font-montserrat text-[14px]  tracking-wide shrink-0">
        <RotateCcw className="w-5 h-5 text-[#4C788D]/60" strokeWidth={2.5} /> Pre Defined Processes
      </div>
      <div className="flex-1 px-8 py-2 pb-4 overflow-y-auto custom-scrollbar">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex py-6 border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors last:border-0 group cursor-pointer -mx-4 px-4 rounded-[14px]">
            <div className="flex-1 space-y-3.5">
              <div className="text-[16px] font-bold text-[#003F5C] group-hover:text-primary transition-colors font-roboto tracking-tight">Operation Name</div>
              <div className="text-[10px] text-[#4C788D] font-bold flex items-center gap-1.5">
                 Resources
              </div>
              <div className="text-[10px] text-[#4C788D] font-bold flex items-center gap-1.5">
                 Machine
              </div>
            </div>
            <div className="flex-1 space-y-3.5">
              <div className="text-[14px] font-normal text-[#003F5C] font-roboto tracking-tight text-right pr-4">Function Name</div>
              <div className="text-[12px] text-[#003F5C] font-bold text-right pr-4">Resources Names</div>
              <div className="text-[12px] text-[#003F5C] font-bold text-right pr-4">Machine</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
