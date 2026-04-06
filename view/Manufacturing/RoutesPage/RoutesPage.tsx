"use client";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Leaf,
  Search,
  Warehouse,
  FastForward,
  SignalHigh,
  Route,
  Activity,
  SlidersVertical,
  ScanLine,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Fragment, useState } from "react";
import Shelf from "@/view/Dashboard/components/side Card/shelf";
import MaterialConsumptionTable from "@/view/Resources/Consumption/Components/MaterialConsumptionTable";
import CustomTableComponent from "@/view/Resources/Consumption/Components/CustomTableComponent";
import { VerticalProgress } from "@/components/ui/vertical-progress";
import {
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpandedTable from "./components/ExpandedTable";
import ChartTable from "./components/ChartTable";

const alerts = [
  {
    text: "Confirm mass on machine",
    icon: "warehouse",
    Id: 4017702,
  },
  {
    text: "Material in demand ID",
    icon: "leaf",
    Id: 4017702,
  },
  {
    text: "Confirm mass on machine",
    icon: "warehouse",
    Id: 4017702,
  },
];

interface RecentProcess {
  id: string;
  route: string;
  startingDate: string;
  product: string;
  material: string;
}

const recentProcesses: RecentProcess[] = [
  {
    id: "1",
    route: "364787",
    startingDate: "01-10-2026",
    product: "30kg Aluminum",
    material: "Tesla Giga Press",
  },
  {
    id: "2",
    route: "364788",
    startingDate: "02-10-2026",
    product: "15kg Copper",
    material: "Samsung Electronics",
  },
  {
    id: "3",
    route: "364789",
    startingDate: "02-10-2026",
    product: "50kg Steel",
    material: "General Motors",
  },
  {
    id: "4",
    route: "364790",
    startingDate: "03-10-2026",
    product: "10kg Lithium",
    material: "Panasonic Energy",
  },
  {
    id: "5",
    route: "364791",
    startingDate: "04-10-2026",
    product: "25kg Carbon Fiber",
    material: "SpaceX Aerospace",
  },
];

const data = [
  { maxValue: 89, value: 58, color: "bg-contemporary-darkblue" },
  { maxvalue: 69, value: 39, color: "bg-contemporary-darkblue" },
  { maxvalue: 82, value: 63, color: "bg-contemporary-darkblue" },
  { maxvalue: 34, value: 29, color: "bg-contemporary-darkblue" },
  { maxvalue: 69, value: 69, color: "bg-contemporary-darkblue" },
  { maxvalue: 89, value: 60, color: "bg-contemporary-darkblue" },
];

const routesTableData = [
  {
    routeId: "821940",
    jobOrderId: "112098",
    startingDate: "12-05-2026",
    client: "Ahmed Hassan",
    sales: "Sarah Mansour",
    product: "15 tons Cement",
  },
  {
    routeId: "935512",
    jobOrderId: "457821",
    startingDate: "14-05-2026",
    client: "Global Logistics",
    sales: "Khaled Aly",
    product: "22 tons Steel Bar",
  },
  {
    routeId: "774109",
    jobOrderId: "332156",
    startingDate: "15-05-2026",
    client: "Modern Build Co.",
    sales: "Mona Ibrahim",
    product: "10 tons Aggregate",
  },
  {
    routeId: "821940",
    jobOrderId: "112098",
    startingDate: "12-05-2026",
    client: "Ahmed Hassan",
    sales: "Sarah Mansour",
    product: "15 tons Cement",
  },
  {
    routeId: "935512",
    jobOrderId: "457821",
    startingDate: "14-05-2026",
    client: "Global Logistics",
    sales: "Khaled Aly",
    product: "22 tons Steel Bar",
  },
  {
    routeId: "774109",
    jobOrderId: "332156",
    startingDate: "15-05-2026",
    client: "Modern Build Co.",
    sales: "Mona Ibrahim",
    product: "10 tons Aggregate",
  },
  {
    routeId: "774109",
    jobOrderId: "332156",
    startingDate: "15-05-2026",
    client: "Modern Build Co.",
    sales: "Mona Ibrahim",
    product: "10 tons Aggregate",
  },
];

export default function RoutesPage() {
  const [showExpandedTable, setShowExpandedTable] = useState<{
    id: string;
    mode: "Material" | "Function" | "Product";
  } | null>(null);
  const [tableMode, setTableMode] = useState<"list" | "chart" | undefined>(
    undefined,
  );
  const [alertTap, setAlertTap] = useState<"alerts" | "notifications">(
    "alerts",
  );
  return (
    <div className="flex flex-col lg:flex-row  mx-auto gap-7.5 container mt-11 ">
      <div className="flex-1 min-w-0 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <BreadcrumbsComponent />
          <DropdownMenu>
            <DropdownMenuTrigger className="max-h-9.5 text-shadow-contemporary-darkblue flex gap-3.5 py-2.5 items-center pl-7 pr-14 bg-white shadow-[0px_3px_10px_#0000001A] rounded-[8px] font-montserrat font-medium text-sm uppercase tracking-[0.28px]">
              <ChevronDown className="size-4" />
              Routes
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>

        {/* Main tables */}
        <div className="grow flex flex-col gap-6 min-w-0">
          {/* Top tables */}
          <div className="w-full grid gap-6 2xl:grid-cols-[1fr_2fr] grid-cols-1 justify-center items-center">
            <MaterialConsumptionTable type="routes production" />
            <CustomTableComponent
              header={
                <div className="flex gap-2.5 items-center ">
                  <SignalHigh className="text-contemporary-darkerblue h-4.5 w-4.5" />{" "}
                  Routes Actual Vs. Planned Production
                </div>
              }
              content={
                <div className="flex items-end justify-around p-2 rounded-xl">
                  {data.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center"
                    >
                      <div className="flex gap-1.25">
                        <VerticalProgress
                          value={0}
                          maxvalue={item.maxvalue || 89}
                          indicatorColor={item.color}
                          className={`w-2.5 rounded-[3px] *:rounded-[3px] bg-[#CDD5E1]`} // Grey "Planned" track
                        />
                        <div className="flex flex-col justify-end">
                          <VerticalProgress
                            value={item.value}
                            maxvalue={item.value}
                            indicatorColor={item.color}
                            className={` w-2.5 rounded-[3px] *:rounded-[3px] bg-[#CDD5E1]`} // Grey "Planned" track
                          />
                        </div>
                      </div>
                      <div className="text-center text-black font-montserrat text-sm font-medium -tracking-normal">
                        Job Order Name
                      </div>
                    </div>
                  ))}
                </div>
              }
            />
          </div>

          {/* bottom table */}
          <div className="w-full">
            <CustomTableComponent
              tableMode={tableMode}
              setTableMode={setTableMode}
              header={
                <div className="flex gap-2.5 items-center ">
                  <Route /> Routes
                </div>
              }
              content={
                tableMode === "chart" ? (
                  <ChartTable />
                ) : (
                  <div className=" w-full p-4 min-w-0 overflow-x-auto">
                    <Table className="w-full border-collapse border-b mb-6">
                      <TableHeader className="font-montserrat text-[12px] tracking-[0.24px]">
                        <TableRow className="w-full border-b border-[#B2BEC3]">
                          <TableHead className="text-center pb-5 font-bold">
                            Route ID
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            Job Order ID
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            Starting Date
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            State
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            Client
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            Sales
                          </TableHead>
                          <TableHead className="text-center pb-5 font-bold">
                            Product
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="font-montserrat">
                        {routesTableData.map((row, i) => (
                          <Fragment key={i}>
                            <TableRow className=" w-full border-b  border-soft-gray">
                              <TableCell className="text-center py-5 ">
                                {row.routeId}
                              </TableCell>
                              <TableCell className="text-center py-5 ">
                                {row.jobOrderId}
                              </TableCell>
                              <TableCell className="text-center py-5 ">
                                {row.startingDate}
                              </TableCell>
                              <TableCell className="text-center py-5">
                                <Activity className="inline-block text-primary" />
                              </TableCell>
                              <TableCell className="text-center py-5">
                                {row.client}
                              </TableCell>
                              <TableCell className="text-center py-5">
                                {row.sales}
                              </TableCell>
                              <TableCell className="text-center py-5 ">
                                {row.product}
                              </TableCell>
                              <TableCell
                                className="pl-10 text-center py-5"
                                onClick={() => {
                                  if (showExpandedTable?.mode !== "Material")
                                    setShowExpandedTable({
                                      id: i.toString(),
                                      mode: "Material",
                                    });
                                  else setShowExpandedTable(null);
                                }}
                              >
                                <Leaf
                                  className={`size-6 hover:cursor-pointer ${showExpandedTable?.id === i.toString() && showExpandedTable.mode === "Material" ? "text-primary" : "text-muted-foreground"}`}
                                />
                              </TableCell>
                              <TableCell
                                className="text-center py-5"
                                onClick={() => {
                                  if (showExpandedTable?.mode !== "Function")
                                    setShowExpandedTable({
                                      id: i.toString(),
                                      mode: "Function",
                                    });
                                  else setShowExpandedTable(null);
                                }}
                              >
                                <SlidersVertical
                                  className={`size-6 hover:cursor-pointer ${showExpandedTable?.id === i.toString() && showExpandedTable.mode === "Function" ? "text-primary" : "text-muted-foreground"}`}
                                />
                              </TableCell>
                              <TableCell
                                className="text-center py-5 "
                                onClick={() => {
                                  if (showExpandedTable?.mode !== "Product")
                                    setShowExpandedTable({
                                      id: i.toString(),
                                      mode: "Product",
                                    });
                                  else setShowExpandedTable(null);
                                }}
                              >
                                <ScanLine
                                  className={`size-6 hover:cursor-pointer ${showExpandedTable?.id === i.toString() && showExpandedTable.mode === "Product" ? "text-primary" : "text-muted-foreground"}`}
                                />
                              </TableCell>
                            </TableRow>
                            {showExpandedTable?.id === i.toString() && (
                              <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={10} className="p-0">
                                  <div
                                    className="w-full flex justify-around py-1 max-h-50 "
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ExpandedTable
                                      mode={showExpandedTable.mode}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                          </Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )
              }
              mode="routesTable"
            />
          </div>
        </div>
      </div>

      {/* SideBar */}
      <aside className="flex flex-col gap-6">
        {/* searchbar */}
        <div className="relative w-full ">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by Job ID"
            className="h-9.5 rounded-xl border-0 bg-white pl-9 shadow-md placeholder:text-xs"
          />
        </div>

        {/* Alerts and notifications */}
        <Card className="relative grow py-3 px-1.5 font-montserrat shadow-[0px_8px_12px_#0000001A] rounded-[10px]">
          <CardHeader className="px-1">
            <CardTitle className="pb-0">
              <div className="flex">
                <button
                  className={`font-montserrat font-bold text-sm uppercase flex gap-4.5 items-center justify-center flex-1 pt-2 pb-5 ${alertTap !== "alerts" ? "text-[#D0D7DA]  hover:cursor-pointer" : "border-b text-contemporary-red  border-contemporary-red"}`}
                  onClick={() => setAlertTap("alerts")}
                >
                  {" "}
                  <span
                    className={` inline-block w-2.25 h-2.25 rounded-full ${alertTap === "alerts" ? "bg-contemporary-red " : "bg-[#D0D7DA]"}`}
                  ></span>{" "}
                  Alerts
                </button>{" "}
                <button
                  className={`font-montserrat font-bold text-sm uppercase flex gap-4.5 items-center justify-center flex-1 pt-2 pb-5 ${alertTap === "alerts" ? "text-[#D0D7DA]  hover:cursor-pointer" : "border-b text-contemporary-lightblue  border-contemporary-lightblue"}`}
                  onClick={() => setAlertTap("notifications")}
                >
                  <span
                    className={`inline-block w-2.25 h-2.25 rounded-full ${alertTap === "alerts" ? "bg-[#D0D7DA]" : "bg-contemporary-lightblue"}`}
                  ></span>{" "}
                  Notifications
                </button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2  w-full mb-5 overflow-y-auto max-h-70">
              {alerts.map((a, i) => {
                return (
                  <li
                    key={i}
                    className="flex gap-6.75 font-montserrat font-medium text-[16px] w-full"
                  >
                    <Shelf
                      description={a.text}
                      icon={
                        a.icon === "warehouse" ? (
                          <Warehouse color="#D0D7DA" size={35} />
                        ) : (
                          <Leaf color="#D0D7DA" size={35} />
                        )
                      }
                      iconName="WAREHOUSE"
                      id={a.Id.toString()}
                      lastShelf={alerts.length - 1 === i}
                      shelfInAlertsForRoutesPage={true}
                    />
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        {/* recent processes */}
        <CustomTableComponent
          header={
            <div className="uppercase flex gap-6 p-1 items-center  text-contemporary-darkerblue font-montserrat font-bold text-sm">
              <FastForward className="transform-[rotate(0.5turn)] size-6" />
              Recent Routes
            </div>
          }
          content={
            <div className=" overflow-auto font-montserrat max-h-100">
              {recentProcesses.map((process, i) => (
                <div
                  key={process.id}
                  className={`flex relative ${recentProcesses.length - 1 === i && "overflow-hidden mb-6"}`}
                >
                  <div
                    className={`ml-9 w-3 h-3 rounded-full mt-6 bg-black shrink-0`}
                  />
                  <div className="absolute top-9 left-10.5 border-l-2 border-kpi-blue h-full"></div>
                  <div
                    className={`ml-10 grid grid-cols-2 gap-x-8 gap-y-1 text-sm ${recentProcesses.length - 1 === i ? "" : "mb-6"} grow items-center `}
                  >
                    <div className="text-[#4C788D] font-medium text-[12px] tracking-[0.24px]">
                      Route
                    </div>
                    <div className="font-bold text-[#4C788D] text-[11px] tracking-[0.22px]">
                      {process.route}
                    </div>

                    <div className="text-[#4C788D]  text-[10px] font-medium tracking-[0.2px]">
                      Starting Date
                    </div>
                    <div className="text-[#4C788D]  text-[10px] font-medium tracking-[0.2px]">
                      {process.startingDate}
                    </div>

                    <div className="text-[#4C788D]  text-[10px] font-semibold">
                      Products
                    </div>
                    <div className="text-[#4C788D] ] text-[10px] font-medium">
                      {process.product}
                    </div>

                    <div className="text-[#4C788D]  text-[10px] font-semibold">
                      Material
                    </div>
                    <div className="text-[#4C788D]  text-[10px] font-medium">
                      {process.material}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </aside>
    </div>
  );
}
