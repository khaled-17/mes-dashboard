"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List } from "lucide-react";

type Props = {
  className?: string;
  tableMode?: "list" | "chart";
  setTableMode?: (a: "chart" | "list") => void;
  mode?: "routesTable";
};

export default function TappedNavigationBarTable({
  className,
  tableMode,
  setTableMode,
  mode,
}: Props) {
  const triggerStyles =
    "after:bg-primary text-[15px] min-w-30 pb-3 leading-6.25 data-active:text-primary font-roboto font-normal data-active:font-bold hover:text-muted-foreground! data-[state=active]:hover:text-primary!";

  const chartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      {/* The base horizontal line */}
      <line x1="4" y1="19" x2="20" y2="19" />
      {/* The jagged "chart" path */}
      <path d="M4 15L8 9L12 11L16 6L20 10" />
    </svg>
  );

  return (
    <Tabs defaultValue={tableMode} className={className}>
      <TabsList variant={"line"} className="grow">
        <TabsTrigger
          value="list"
          className={triggerStyles}
          onClick={() => setTableMode && setTableMode("list")}
        >
          <List className="size-6" />{" "}
          {mode === "routesTable" ? "List" : "Consumption List"}
        </TabsTrigger>
        <TabsTrigger
          value="chart"
          className={triggerStyles}
          onClick={() => setTableMode && setTableMode("chart")}
        >
          {chartIcon} {mode === "routesTable" ? "Chart" : "Consumption Chart"}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
