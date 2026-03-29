"use client";

import DropdownMenu from "./DropdownMenu";
import FunctionIcon from "@/icons/FunctionIcon";

import LoadIcon from "@/icons/LoadIcon";
import TimeNav from "./TimeNav";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* 
  BottomHeader: renders the bottom header and adapts its content
  based on the current pathname (shows extra icons and TimeNav
  unless on the "/planning" page).
*/

const BottomHeader = () => {
  const pathname = usePathname();
  const [func, setFunc] = useState(true);
  return (
    <>
      <div className="h-[50px] w-full shadow-md flex items-center px-8  justify-between  ">
        {pathname !== "/planning" ? (
          <>
            <div className=" flex items-center gap-4 ">
              <DropdownMenu />

              <button
                className={`${func && "bg-blue-300/50"} p-2 rounded-md`}
                onClick={() => setFunc(!func)}
              >
                <FunctionIcon className={`w-4 h-4 ${" text-primary"}`} />
              </button>

              <LoadIcon className=" w-5 h-5 text-[#B2BEC3]" />
            </div>
            <TimeNav />
          </>
        ) : (
          <DropdownMenu />
        )}
      </div>
    </>
  );
};

export default BottomHeader;
