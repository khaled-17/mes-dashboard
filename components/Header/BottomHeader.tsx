"use client";

import FactoryDropdownMenu from "./DropdownMenu";
import { Toggle } from "@/components/ui/toggle";
import { FunctionSquareIcon, Rocket } from "lucide-react";
import TimeNav from "./TimeNav";
import { usePathname } from "next/navigation";


/* 
  BottomHeader: renders the bottom header and adapts its content
  based on the current pathname (shows extra icons and TimeNav
  unless on the "/planning" page).
*/

const BottomHeader = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[50px] w-full shadow-md flex items-center px-8  justify-between  ">
        {pathname !== "/planning" &&   "/" ? (
          <>
            <div className=" flex items-center gap-4 ">
              <FactoryDropdownMenu />

              <Toggle
         
            className="p-2 rounded-md data-[state=on]:bg-blue-400/50"
              >
                <FunctionSquareIcon className={`w-4 h-4 text-primary`} />
              </Toggle>

              <Rocket className=" w-6 h-6 text-[#B2BEC3]" />
            </div>
            <TimeNav />
          </>
        ) : (
          <FactoryDropdownMenu />
        )}
      </div>
    </>
  );
};

export default BottomHeader;
