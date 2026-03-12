import Image from "next/image";

export default function VerticalStepper() {
  return (
    <div className="flex items-center gap-4 ">
      <div 
        className="text-[#4C788D] font-bold tracking-widest text-[20px] pt-30 font-roboto " 
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Operation
      </div>
      
      <div className="flex flex-col items-center -mt-20">
        <div className="w-[42px] h-[42px] rounded-full bg-[#2D62ED] flex items-center justify-center shadow-[0_4px_12px_rgba(46,98,237,0.4)] z-10 hover:scale-105 transition-transform cursor-pointer">
          <Image src="/planning-section-assets/function.svg" width={22} height={22} alt="function" className="brightness-0 invert p-0.5" />
        </div>
        <div className="w-[2px] h-[70px] bg-[#4C788DCC]"></div>
        
        <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#CFDEEA] flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-10 transition-colors hover:border-primary/30 hover:scale-105 cursor-pointer">
          <Image src="/planning-section-assets/time.svg" width={18} height={18} alt="time" className="opacity-90 grayscale brightness-90 saturate-200" />
        </div>
        <div className="w-0 h-[85px] border-l-2 border-dashed border-[#4C788DCC] my-1"></div>
        
        <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#CFDEEA] flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-10 transition-colors hover:border-primary/30 hover:scale-105 cursor-pointer">
          <Image src="/planning-section-assets/machine.svg" width={22} height={22} alt="rocket" className="opacity-90 grayscale brightness-90 saturate-200" />
        </div>
        <div className="w-0 h-[85px] border-l-2 border-dashed border-[#4C788DCC] my-1"></div>
        
        <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#CFDEEA] flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-10 transition-colors hover:border-primary/30 hover:scale-105 cursor-pointer">
          <Image src="/planning-section-assets/Resources (1).svg" width={18} height={18} alt="building" className="opacity-90 grayscale brightness-90 saturate-200" />
        </div>
      </div>
    </div>
  );
}


