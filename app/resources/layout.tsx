import ResourcesSideBar from "@/components/resources/ResourcesSideBar";
import { ReactNode } from "react";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8.5 xl:flex-row xl:items-start">
      <section className="min-w-0 flex-1">{children}</section>
      <ResourcesSideBar />
    </div>
  );
}
