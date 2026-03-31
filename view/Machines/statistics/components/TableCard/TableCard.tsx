"use client";

import { SlidersVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverTimeTab from "./Over Time/OT-Tab";
import DownTimeTab from "./Down Time/DT-Tab";
import GOODvsScrapTab from "./Good Vs. Scrap/GvsS-Tab";
import { useState } from "react";

function TableCard() {
  const [activeTab, setActiveTab] = useState<string>("Over Time");

  const handleTabChange = () => {
    if (activeTab === "Over Time") {
      return <OverTimeTab />;
    } else if (activeTab === "Down Time") {
      return <DownTimeTab />;
    } else if (activeTab === "Good Vs. Scrap") {
      return <GOODvsScrapTab />;
    }
  };

  return (
    <div className="w-full min-w-0">
      <Card className="w-full min-w-0">
        <CardHeader className="flex flex-col items-start justify-between gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 lg:flex-row lg:items-center">
          <CardTitle className="flex items-center gap-2 sm:gap-4">
            <SlidersVertical className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[14px] sm:text-[16px] whitespace-nowrap">Machine Statistics</span>
          </CardTitle>

          <div className="w-full lg:w-auto lg:pr-12">
            <Tabs defaultValue="Function">
              <TabsList
                variant="underline"
                className="mr-0 flex-wrap gap-1 sm:gap-2 md:gap-4 border-none"
              >
                <TabsTrigger
                  value="Function"
                  onClick={() => {
                    setActiveTab("Over Time");
                  }}
                  className="pb-2 sm:pb-3 text-[13px] sm:text-[16px]"
                >
                  Over Time
                </TabsTrigger>
                <TabsTrigger
                  value="Route"
                  onClick={() => {
                    setActiveTab("Down Time");
                  }}
                  className="pb-2 sm:pb-3 text-[13px] sm:text-[16px]"
                >
                  Down Time
                </TabsTrigger>
                <TabsTrigger
                  value="Job Order"
                  onClick={() => {
                    setActiveTab("Good Vs. Scrap");
                  }}
                  className="pb-2 sm:pb-3 text-[13px] sm:text-[16px]"
                >
                  Good Vs. Scrap
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent className="min-w-0 overflow-x-auto px-3 pb-4 pt-2 sm:px-4 sm:pb-6 sm:pt-4 md:px-6 lg:px-10">
          {handleTabChange()}
        </CardContent>
      </Card>
    </div>
  );
}

export default TableCard;

