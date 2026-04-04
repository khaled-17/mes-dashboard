import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import { ReactNode } from "react";
import ResourcesTopBar from "@/components/resources/ResourcesTopBar";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex gap-4 ">
        <section className="grow">{children}</section>
        <ResourcesSideBar />
      </div>
    </>
  );
}
