import { TabType } from "../types/tabs";

interface TopTabsProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

const tabs: TabType[] = [
  "FLOW CHART",
  "JOB ORDERS",
  "ROUTES",
  "PROCESS",
  "OUTPUT",
];

export default function TopTabs({ activeTab, onChange }: TopTabsProps) {
  return (
    <div className="w-full bg-white border-b border-t border-gray-100 ">
      <div className="flex justify-center items-stretch h-[80px]">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`relative flex items-center justify-center w-[315px] h-full uppercase transition-all duration-200 text-[#272D3B]
              ${
                isActive
                  ? "text-[20px] font-bold leading-[24px] tracking-[0px]"
                  : "text-[15px] font-medium leading-[19px] tracking-[0px]"
              }`}
            >
              {isActive && (
                <div
                  className="absolute rounded-xl top-0 left-0 right-0 h-[6px]"
                  style={{ backgroundColor: "#2D62ED", opacity: 1 }}
                />
              )}

              <span>{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}