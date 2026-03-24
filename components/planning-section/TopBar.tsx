import { Search } from "lucide-react";

interface TopBarProps {
  planningMode: 'set-time' | 'availability';
  setPlanningMode: (mode: 'set-time' | 'availability') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function TopBar({ planningMode, setPlanningMode, searchQuery, setSearchQuery }: TopBarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full shrink-0 mb-6 md:mb-10 px-4 md:px-8 gap-6">
      <h1 className="text-[#003F5C] text-[16px] md:text-[18px] font-semibold font-montserrat w-full md:w-auto text-center md:text-left">Planning</h1>
      
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full md:w-auto">
        {/* Toggle Switch */}
        <div className="flex bg-white rounded-[10px] shadow-[0_2px_15px_rgb(0,0,0,0.03)] w-full sm:w-[341px] h-[38px] items-center p-0.5">
          <button 
            onClick={() => setPlanningMode('set-time')}
            className={`flex-1 cursor-pointer rounded-[8px] h-full text-[12px] font-medium tracking-wide transition-all duration-300 ${planningMode === 'set-time' ? 'bg-[#2D62ED] text-white shadow-[1px_2px_6px_#0000001A]' : 'text-[#4C788D] hover:bg-slate-50'}`}
          >
            Set Time
          </button>
          <button 
            onClick={() => setPlanningMode('availability')}
            className={`flex-1 cursor-pointer rounded-[8px] h-full text-[12px] font-medium tracking-wide transition-all duration-300 ${planningMode === 'availability' ? 'bg-[#2D62ED] text-white shadow-[1px_2px_6px_#0000001A]' : 'text-[#4C788D] hover:bg-slate-50'}`}
          >
            Availability
          </button>
        </div>

        {/* Search Bar aligned with sidebar */}
        <div className="relative w-full sm:w-[341px] lg:w-[375px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by Process" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-[42px] pr-4 py-2 bg-white border-none shadow-[0_2px_15px_rgb(0,0,0,0.03)] rounded-[10px] h-[46px] text-[12px] focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400 font-bold transition-all"
          />
        </div>
      </div>
    </div>
  );
}
