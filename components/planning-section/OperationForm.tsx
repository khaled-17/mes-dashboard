import { ChevronDown, Save } from "lucide-react";

export default function OperationForm() {
  return (
    <div className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-[500px] flex flex-col pt-0">
        <input 
          type="text" 
          placeholder="Operation Name" 
          className="w-full block py-[18px] px-8 bg-white border border-transparent rounded-[16px] mb-8 shadow-[0px_3px_6px_#00000029] focus:outline-none focus:border-primary/20 focus:ring-4 focus:ring-primary/5 text-[16px] text-[#003F5C] placeholder:text-[#94A3B8] font-roboto font-normal transition-all text-left"
        />

        <div className="w-full bg-white border border-gray-100/50 rounded-[16px] shadow-[0_12px_45px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden h-[340px]">
          <button className="w-full py-6 px-8 border-b border-[#F1F5F9] flex justify-between items-center text-[16px] text-[#003F5C]/80 font-bold hover:bg-slate-50/50 transition-colors">
            Function
            <ChevronDown className="w-5 h-5 text-[#94A3B8]" strokeWidth={2.5} />
          </button>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
            <div className="flex flex-col">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`py-5  px-8 text-[14px] font-montserrat font-medium cursor-pointer transition-all duration-300 text-left border-b border-gray-50/50 last:border-0 hover:bg-[#CFDEEA]/60 hover:pl-10  text-[#4C788D]/70`}>
                  Function Name
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[900px] flex justify-end mt-16 pr-4">
        <button className="bg-[#5C7D8E] hover:bg-[#4C6878] text-white px-8 py-3.5 rounded-[12px] text-[14px] font-bold flex items-center gap-2.5 shadow-[0_4px_15px_rgba(92,125,142,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
          <Save className="w-[18px] h-[18px]" strokeWidth={2.5} /> Save Prototype
        </button>
      </div>
    </div>
  );
}
