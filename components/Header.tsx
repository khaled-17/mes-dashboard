"use client";

import { usePathname } from "next/navigation";
import BottomHeader from "./Header/BottomHeader";
import TopHeader from "./Header/TopHeader";

const Header = () => {
  const pathname = usePathname();
  return (
   
    <header className="flex flex-col bg-white  z-50   ">
      {pathname !== "/" && pathname !== "/planning" && <TopHeader />}
      <BottomHeader />
    </header>
  );
};

export default Header;
