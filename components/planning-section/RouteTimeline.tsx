import { Plus } from "lucide-react";

export default function RouteTimeline() {
  return (
    <>
      <div className="text-[#4C788D] font-bold mb-8 tracking-[0.2em] text-[20px] font-roboto uppercase">ROUTE</div>
      
      {/* Horizontal Timeline */}
      <div className="flex items-center justify-center mb-24 w-full px-36">
        <div className="w-[42px] h-[42px] shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-extrabold shadow-[0_4px_15px_rgba(46,98,237,0.25)] text-[15px]">
          1
        </div>
        <div className="w-[110px] h-[2.5px] bg-[#4C788DCC] mx-4 rounded-full"></div>
        <div className="w-[42px] h-[42px] shrink-0 rounded-full bg-white text-[#4C788DCC] border-2 border-[#CFDEEA] flex items-center justify-center font-extrabold shadow-sm text-[18px]">
          2
        </div>
        <div className="flex-1 border-t-[3.5px] border-dashed border-[#4C788DCC] mx-6 min-w-[139px]"></div>
        <button className="bg-white shrink-0 border border-slate-100 text-[#4C788D] rounded-l-[24px] rounded-r-[8px] px-4 py-[8px] text-[20px] font-bold font-roboto tracking-wide flex items-center gap-2.5 shadow-[0px_3px_6px_#00000029] hover:shadow-[0px_4px_8px_#0000003D] hover:border-primary/20 transition-all group cursor-pointer">
          <Plus className="w-[20px] h-[20px] text-[#4C788D] stroke-[3.5] group-hover:scale-110 transition-transform" /> Add Operation
        </button>
      </div>
    </>
  );
}
