"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  // resources page tabs
  [
    { label: "TIME LINE", href: "/resources" },
    { label: "SUPPLY", href: "/resources/supply" },
    { label: "WEIGHT", href: "/resources/weight" },
    { label: "CONSUMPTION", href: "/resources/consumption" },
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

  return (
    <nav
      className=" bg-white border border-gray-200"
      aria-label="Main navigation"
    >
      <ul className="flex  justify-between h-[50px] px-6 gap-8 list-none m-0 p-0">
        {pathname.includes("/resources") &&
          tabs[0].map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <li key={tab.href} className="relative h-full flex items-end">
                <Link
                  href={tab.href}
                  className={`
                  py-4 px-12  tracking-wide  transition-colors duration-150 whitespace-nowrap text-black
                  ${isActive ? "   font-extrabold" : "text-sm"}
                `}
                >
                  {tab.label}
                </Link>
                {/* Blue active indicator underline */}
                {isActive && (
                  <span
                    className="absolute top-0 left-0 right-0 h-[4px] bg-primary rounded-b-sm"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        {pathname.includes("/manufacturing") &&
          tabs[1].map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <li key={tab.href} className="relative h-full flex items-end">
                <Link
                  href={tab.href}
                  className={`
                  py-4 px-12  tracking-wide  transition-colors duration-150 whitespace-nowrap text-black
                  ${isActive ? "   font-extrabold" : "text-sm"}
                `}
                >
                  {tab.label}
                </Link>
                {/* Blue active indicator underline */}
                {isActive && (
                  <span
                    className="absolute top-0 left-0 right-0 h-[4px] bg-primary rounded-b-sm"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        {pathname.includes("/machines") &&
          tabs[2].map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <li key={tab.href} className="relative h-full flex items-end">
                <Link
                  href={tab.href}
                  className={`
                  py-4 px-12  tracking-wide  transition-colors duration-150 whitespace-nowrap text-black
                  ${isActive ? "   font-extrabold" : "text-sm"}
                `}
                >
                  {tab.label}
                </Link>
                {/* Blue active indicator underline */}
                {isActive && (
                  <span
                    className="absolute top-0 left-0 right-0 h-[4px] bg-primary rounded-b-sm"
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
