import { Search } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center w-full shrink-0 mb-10 px-8">
      <h1 className="text-[#003F5C] text-[16px] font-semibold font-montserrat">Planning</h1>
      
      <div className="flex items-center gap-12">
        {/* Toggle Switch */}
        <div className="flex bg-white rounded-[10px]  shadow-[0_2px_15px_rgb(0,0,0,0.03)] w-[341px] h-[38px] items-center">
          <button className="flex-1 bg-primary cursor-pointer text-white rounded-[8px] h-full text-[12px] font-medium shadow-[1px_2px_6px_#0000001A] tracking-wide">
            Set Time
          </button>
          <button className="flex-1 text-[#4C788D] cursor-pointer rounded-[8px] h-full text-[12px] font-medium tracking-wide hover:bg-slate-50 transition-colors">
            Availability
          </button>
        </div>

        {/* Search Bar aligned with sidebar */}
        <div className="relative w-[375px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by Process" 
            className="w-full pl-[42px] pr-4 py-2 bg-white border-none shadow-[0_2px_15px_rgb(0,0,0,0.03)] rounded-[10px] h-[46px] text-[12px] focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 font-bold transition-all"
          />
        </div>
      </div>
    </div>
  );
}
