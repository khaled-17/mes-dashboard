"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getSectionKeyFromPathname,
  SECTION_NAVIGATION,
} from "@/lib/section-navigation";

const TopHeader = () => {
  const pathname = usePathname();
  const sectionKey = getSectionKeyFromPathname(pathname);

  if (!sectionKey) {
    return null;
  }

  const tabs = SECTION_NAVIGATION[sectionKey].tabs;

  return (
    <nav
      className="w-full bg-white border border-gray-200"
      aria-label="Main navigation"
    >
      <ul className="flex justify-between h-12.5 px-6 gap-8 list-none m-0 p-0 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li key={tab.href} className="relative h-full flex items-end">
              <Link
                href={tab.href}
                className={`py-4 px-8 tracking-wide transition-colors duration-150 whitespace-nowrap text-black ${
                  isActive ? "font-extrabold" : "text-sm"
                }`}
              >
                {tab.label}
              </Link>
              {isActive && (
                <span
                  className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-b-sm"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TopHeader;
