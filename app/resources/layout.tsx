import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import ResourcesTopBar from "@/components/resources/ResourcesTopBar";
import { ReactNode } from "react";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
  <>

<div className="flex gap-4 ">
     <div className=" flex-1 flex flex-col  gap-4">
     <ResourcesTopBar/>
  <section >{children}</section>
 </div>
 <ResourcesSideBar/>
</div>
  </>);
}
