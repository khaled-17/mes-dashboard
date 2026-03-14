"use client";

import { Activity, SlidersVertical, Route, Tag } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FunctionTab from "./Function Tab/F-Tab";
import RouteTab from "./Route Tab/R-Tab";;
import JobOrderTab from "./Job Orders Tab/JO-Tab";
import { useState } from "react";

function TableCard() {

  const [activeTab, setActiveTab] = useState<string>("Function");

  const handleTabChange = () => {
    if (activeTab === "Function") {
      return <FunctionTab />
    }
    else if (activeTab === "Route") {
      return <RouteTab />
    }
    else if (activeTab === "Job Order") {
      return <JobOrderTab />
    }
  }

  return (
    <div>
      <Card className="w-[1400] h-200">
        <CardHeader className="px-7 flex items-center justify-between">
          <CardTitle className="flex items-center gap-4 ">
            <Activity className="w-6 h-6" />
            <span className="text-[18px]">Current Activity</span>
          </CardTitle>

          <Tabs defaultValue="Function">
            <TabsList variant="underline" className="border-none gap-8 mr-20">
              <TabsTrigger value="Function" onClick={() => {setActiveTab("Function")}} className="pb-5 text-[18px]">
                <SlidersVertical className="w-6! h-6! mr-2" />Function
              </TabsTrigger>
              <TabsTrigger value="Route" onClick={() => {setActiveTab("Route")}} className="pb-5 text-[18px]">
                <Route className="w-6! h-6! mr-2" />Route
              </TabsTrigger>
              <TabsTrigger value="Job Order" onClick={() => {setActiveTab("Job Order")}} className="pb-5 text-[18px]">
                <Tag className="w-6! h-6! mr-2" />Job Order
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="pt-10 pb-[-30px] px-20">
          {handleTabChange()}
        </CardContent>
      </Card>
    </div>
  )
}

export default TableCard
