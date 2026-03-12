"use client";

import { usePathname } from "next/navigation";
import BottomHeader from "./Header/BottomHeader";
import TopHeader from "./Header/TopHeader";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col ">
      {pathname !== "/" && pathname !== "/planning" && <TopHeader />}
      <BottomHeader />
    </header>
  );
};

export default Header;
