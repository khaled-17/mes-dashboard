import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import { ReactNode } from "react";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <section className="grow min-w-0">{children}</section>
        <ResourcesSideBar />
      </div>
    </>
  );
}
