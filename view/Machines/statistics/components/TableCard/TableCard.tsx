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
        <CardHeader className="flex flex-col items-start justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:items-center">
          <CardTitle className="flex items-center gap-4 ">
            <SlidersVertical className="w-5 h-5" />
            <span className="text-[16px]">Machine Statistics</span>
          </CardTitle>

          <div className="pr-12">
            <Tabs defaultValue="Function">
              <TabsList
                variant="underline"
                className="mr-0 flex-wrap gap-2 border-none sm:gap-4"
              >
                <TabsTrigger
                  value="Function"
                  onClick={() => {
                    setActiveTab("Over Time");
                  }}
                  className="pb-3 text-[16px]"
                >
                  {/* <SlidersVertical className="w-5! h-5! mr-1" /> */}
                  Over Time
                </TabsTrigger>
                <TabsTrigger
                  value="Route"
                  onClick={() => {
                    setActiveTab("Down Time");
                  }}
                  className="pb-3 text-[16px]"
                >
                  {/* <Route className="w-5! h-5! mr-1" /> */}
                  Down Time
                </TabsTrigger>
                <TabsTrigger
                  value="Job Order"
                  onClick={() => {
                    setActiveTab("Good Vs. Scrap");
                  }}
                  className="pb-3 text-[16px]"
                >
                  {/* <Tag className="w-5! h-5! mr-1" /> */}
                  Good Vs. Scrap
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent className="min-w-0 overflow-x-auto px-4 pb-6 pt-4 sm:px-6 lg:px-10">
          {handleTabChange()}
        </CardContent>
      </Card>
    </div>
  );
}

export default TableCard;
