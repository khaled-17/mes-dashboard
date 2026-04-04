"use client";

import { Activity, SlidersVertical, Route, Tag } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FunctionTab from "./Function Tab/F-Tab";
import RouteTab from "./Route Tab/R-Tab";
import JobOrderTab from "./Job Orders Tab/JO-Tab";
import { useState } from "react";

function TableCard() {
  const [activeTab, setActiveTab] = useState<string>("Function");

  const handleTabChange = () => {
    if (activeTab === "Function") {
      return <FunctionTab />;
    } else if (activeTab === "Route") {
      return <RouteTab />;
    } else if (activeTab === "Job Order") {
      return <JobOrderTab />;
    }
  };

  return (
    <div className="w-full min-w-0">
      <Card className="w-full min-w-0">
        <CardHeader className="flex flex-col items-start justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:items-center">
          <CardTitle className="flex items-center gap-4 ">
            <Activity className="w-5 h-5" />
            <span className="text-[16px]">Current Activity</span>
          </CardTitle>

          <div className="md:pr-12">
            <Tabs defaultValue="Function">
              <TabsList
                variant="underline"
                className="mr-0 flex-wrap gap-2 border-none sm:gap-4"
              >
                <TabsTrigger
                  value="Function"
                  onClick={() => {
                    setActiveTab("Function");
                  }}
                  className="pb-3 text-[16px]"
                >
                  <SlidersVertical className="w-5! h-5! mr-1" />
                  <p>Function</p>
                </TabsTrigger>
                <TabsTrigger
                  value="Route"
                  onClick={() => {
                    setActiveTab("Route");
                  }}
                  className="pb-3 text-[16px]"
                >
                  <Route className="w-5! h-5! mr-1" />
                  <p>Route</p>
                </TabsTrigger>
                <TabsTrigger
                  value="Job Order"
                  onClick={() => {
                    setActiveTab("Job Order");
                  }}
                  className="pb-3 text-[16px]"
                >
                  <Tag className="w-5! h-5! mr-1" />
                  <p>Job Order</p>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent className=" px-4 pb-6 pt-4 sm:px-6 lg:px-10">
          {handleTabChange()}
        </CardContent>
      </Card>
    </div>
  );
}

export default TableCard;
