import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import { ReactNode } from "react";

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
