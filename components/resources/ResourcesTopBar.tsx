"use client";
import { BreadCrumbComponent } from "../BreadcrumbComponent";
import { Button } from "../ui/button";
import TappedNavigationBar from "@/view/Resources/Consumption/Components/TappedNavigationBar";
import { usePathname } from "next/navigation";

const ResourcesTopBar = () => {
  const path = usePathname();
  return (
    <div className="flex justify-between">
      <BreadCrumbComponent />
      <div className="flex gap-4">
        {path.includes("consumption") && <TappedNavigationBar />}
        <Button>Add Resource</Button>
      </div>
    </div>
  );
};

export default ResourcesTopBar;
