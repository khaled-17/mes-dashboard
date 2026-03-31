"use client";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";
import MaterialConsumptionTable from "./Components/MaterialConsumptionTable";
import MaterialWeightsTable from "./Components/MaterialWeightsTable";
import ProcessView from "./process";
import TappedNavigationBar from "./Components/TappedNavigationBar";
import RoutesView from "./routes";
import JobOrderView from "./job-order";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

const ConsumptionPage = () => {
  const pathName = usePathname();

  return (
    <div className="">
      <div className="flex justify-between items-center mb-5">
        <BreadcrumbsComponent />
        <div className="flex gap-4.5">
          <TappedNavigationBar />
          <Button className="h-9.5 flex gap-5.5 rounded-lg px-9 shadow-[0px_3px_6px_#00000029]">
            <Plus className="size-5.5 " />
            ADD NEW
          </Button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="grid gap-5.75 grid-cols-[1fr_2fr]">
          {/* first table */}
          <MaterialConsumptionTable />

          {/* second table */}
          <MaterialWeightsTable />
        </div>
        <div className="grow">
          {pathName.includes("process") ? (
            <ProcessView />
          ) : pathName.includes("routes") ? (
            <RoutesView />
          ) : (
            <JobOrderView />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionPage;
