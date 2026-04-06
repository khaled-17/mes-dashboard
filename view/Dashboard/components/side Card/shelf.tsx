import React from "react";

interface shelfProps {
  icon: React.ReactNode;
  iconName: string;
  description: string;
  id: string;
  lastShelf?: boolean;
  shelfInAlertsForRoutesPage?: boolean;
}

function Shelf({
  icon,
  iconName,
  description,
  id,
  lastShelf = false,
  shelfInAlertsForRoutesPage = false,
}: shelfProps) {
  return (
    <div className="grow">
      <div>
        <div
          className={`flex gap-3 items-center ${!lastShelf && "  border-b border-border"} py-3`}
        >
          <div className="flex flex-col items-center gap-0 flex-1">
            {icon}
            <p
              className={`text-[#8D9192] ${shelfInAlertsForRoutesPage ? "text-[8px]" : "text-[11px]"} font-bold`}
            >
              {iconName}
            </p>
          </div>
          <div className={`text-[#464646] text-[16px] font-bold flex-3`}>
            <p className={`${shelfInAlertsForRoutesPage && "font-medium"}`}>
              {description}
            </p>
            <div className="flex justify-between items-center">
              <p className={`${shelfInAlertsForRoutesPage && "text-[11px]"}`}>
                ID
              </p>
              <p
                className={`font-extrabold ${shelfInAlertsForRoutesPage && "text-sm"}`}
              >
                {id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shelf;
