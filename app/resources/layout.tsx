import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import { ReactNode } from "react";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex gap-4 ">
        <div className=" flex-1 flex flex-col  gap-6">
          <ResourcesTopBar />
          <section className="grow">{children}</section>
        </div>
        <ResourcesSideBar />
      </div>
    </>
  );
}
