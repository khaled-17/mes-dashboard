import { ChevronDown, Building } from 'lucide-react';

export default function PlanningHeader() {
  return (
    <header className="h-[50px] bg-white shadow-[0_3px_6px_rgb(39,45,59,0.2)] flex items-center justify-start py-6 px-10 shrink-0 w-full z-10 relative">
      <button className="flex items-center gap-2.5 bg-[#2D62ED4D] text-primary px-4 py-2.5 rounded-[8px] font-semibold text-[16px] transition-colors hover:bg-[#E0E7FF] group shadow-sm cursor-pointer">
        <Building className="w-5 h-5 text-primary/50 group-hover:scale-110 transition-transform" fill="currentColor" />
        Factory Name
        <ChevronDown className="w-4 h-4 ml-4 text-primary" strokeWidth={3} />
      </button>
    </header>
  );
}
