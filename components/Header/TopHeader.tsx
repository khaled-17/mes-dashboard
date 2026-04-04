"use client";
import {
  getSectionKeyFromPathname,
  getActiveTabFromPathname,
  SECTION_NAVIGATION,
} from "@/lib/section-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  // resources page tabs
  [
    { label: "TIME LINE", href: "/resources" },
    { label: "SUPPLY", href: "/resources/supply" },
    { label: "WEIGHT", href: "/resources/weight" },
    { label: "CONSUMPTION", href: "/resources/consumption/process" },
    { label: "PRODUCT & SCRAP", href: "/resources/product-scrap" },
  ],
  // /manufacturing page tabs
  [
    { label: "FLOW CHART", href: "/manufacturing" },
    { label: "JOB ORDERS", href: "/manufacturing/joborders" },
    { label: "ROUTES", href: "/manufacturing/routes" },
    { label: "PROCESS", href: "/manufacturing/process" },
    { label: "OUTPUT", href: "/manufacturing/output" },
  ],
  // machines page tabs
  [
    { label: "INFORMATION", href: "/machines" },
    { label: "STATISTICS", href: "/machines/statistics" },
    { label: "HISTORY", href: "/machines/history" },
    { label: "DIGITAL TWIN", href: "/machines/digitaltwin" },
  ],
];

const TopHeader = () => {
  const pathname = usePathname();
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const sectionKey = getSectionKeyFromPathname(pathname);

  if (!sectionKey) {
    return null;
  }

  const tabs = SECTION_NAVIGATION[sectionKey].tabs;
  const activeTab = getActiveTabFromPathname(normalizedPathname);

  return (
    <nav
      className=" bg-white border border-gray-200"
      aria-label="Main navigation"
    >
      <ul className="flex justify-between h-12 px-6 gap-8 list-none m-0 p-0 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab?.href === tab.href;
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
