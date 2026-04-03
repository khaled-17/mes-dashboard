"use client";

import { useState } from "react";
import {
  Bell,
  BarChart2,
  ChevronDown,
  LayoutList,
  Signal,
  Search,
  Scan,
  Leaf,
  Warehouse,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";

// ─── data ────────────────────────────────────────────────────────────────────

const barChartData = [
  { name: "W1", actual: 55, planned: 80 },
  { name: "W2", actual: 40, planned: 70 },
  { name: "W3", actual: 75, planned: 60 },
  { name: "W4", actual: 30, planned: 85 },
  { name: "W5", actual: 65, planned: 50 },
  { name: "W6", actual: 85, planned: 70 },
  { name: "W7", actual: 45, planned: 90 },
  { name: "W8", actual: 70, planned: 55 },
  { name: "W9", actual: 50, planned: 75 },
  { name: "W10", actual: 90, planned: 65 },
];

const processes = [
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
  {
    id: "938840",
    function: "Function Name",
    startDate: "02-02-3000",
    jobOrderId: "4353667",
    routeId: "454667",
  },
];

const GANTT_COLORS = [
  "bg-lime-500",
  "bg-cyan-500",
  "bg-red-400",
  "bg-purple-600",
  "bg-violet-700",
  "bg-sky-400",
  "bg-orange-400",
];

const ganttRows = [
  {
    label: "Process 01",
    color: GANTT_COLORS[0],
    segments: [
      [10, 35],
      [50, 30],
    ],
  },
  {
    label: "Process 04",
    color: GANTT_COLORS[1],
    segments: [
      [20, 30],
      [55, 35],
    ],
  },
  { label: "Process", color: GANTT_COLORS[2], segments: [[5, 15]] },
  { label: "Prcosess", color: GANTT_COLORS[3], segments: [[25, 35]] },
  {
    label: "Prcosess",
    color: GANTT_COLORS[4],
    segments: [
      [5, 20],
      [50, 40],
    ],
  },
  { label: "Process 01", color: GANTT_COLORS[5], segments: [[18, 22]] },
  { label: "Process 01", color: GANTT_COLORS[6], segments: [[35, 32]] },
];

const timelineLabels = ["Today", "03-28", "03-29", "03-30", "04-01", "05-02"];

const alerts = [
  { icon: "warehouse", title: "Confirm mass on machine", id: "4017702" },
  { icon: "material", title: "Material in demand", id: "4017702" },
  { icon: "warehouse", title: "Confirm mass on machine", id: "4017702" },
];

const recentProcesses = [
  {
    color: "bg-red-500",
    functionId: "364787",
    date: "01-10-2020",
    route: "Route",
    products: "20kg Aluminum",
    material: "Client Name",
  },
  {
    color: "bg-blue-600",
    functionId: "364787",
    date: "01-10-2020",
    route: "226449",
    products: "20kg Aluminum",
    material: "Client Name",
  },
  {
    color: "bg-cyan-400",
    functionId: "364787",
    date: "01-10-2020",
    route: "226897",
    products: "20kg Aluminum",
    material: "Client Name",
  },
  {
    color: "bg-blue-400",
    functionId: "364787",
    date: "01-10-2020",
    route: "226897",
    products: "20kg Aluminum",
    material: "Client Name",
  },
  {
    color: "bg-teal-400",
    functionId: "364787",
    date: "01-10-2020",
    route: "226897",
    products: "20kg Aluminum",
    material: "Client Name",
  },
  {
    color: "bg-violet-500",
    functionId: "364787",
    date: "01-10-2020",
    route: "Route",
    products: "20kg Aluminum",
    material: "Client Name",
  },
];

// ─── sub-components ──────────────────────────────────────────────────────────

function AlertIcon({ type }: { type: string }) {
  if (type === "warehouse") {
    return (
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500">
        <Warehouse className="size-4" />
      </div>
    );
  }
  return (
    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500">
      <Leaf className="size-4" />
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function ProcessPage() {
  const [view, setView] = useState<"list" | "chart">("list");
  const [alertTab, setAlertTab] = useState<"alerts" | "notifications">(
    "alerts",
  );

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
      {/* ── left / main content ─────────────────────────────────────── */}
      <div className="min-w-0 space-y-4">
        {/* breadcrumb + routes */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <BreadcrumbsComponent />
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-2 rounded-xl border-slate-200 px-5 text-xs font-semibold text-slate-600 shadow-sm"
          >
            <ChevronDown className="size-3.5" />
            ROUTES
          </Button>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(220px,260px)_minmax(0,1fr)]">
          {/* card 1 – total process production */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <LayoutList className="size-4 text-slate-500" />
              <span>Total Process Production</span>
            </div>

            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-bold tracking-tight text-slate-800">
                  5,000
                </p>
                <p className="text-xs uppercase tracking-wide text-primary">
                  Actual Production
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tight text-slate-800">
                  7,000
                </p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Planned Production
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 rounded-full bg-slate-200">
                <div className="h-full w-3/4 rounded-full bg-primary" />
              </div>
              <span className="text-4xl font-bold text-slate-800">75%</span>
            </div>
          </section>

          {/* card 2 – process actual vs planned */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Signal className="size-4 text-slate-500" />
              <span>Process Actual Vs. Planned Production</span>
            </div>

            <div className="flex h-30 items-end justify-between gap-2 overflow-hidden px-2 pb-2">
              {barChartData.map(({ name, actual, planned }, index) => {
                const plannedColors = [
                  "#06b6d4",
                  "#f59e0b",
                  "#8b5cf6",
                  "#ec4899",
                  "#10b981",
                  "#3b82f6",
                  "#f97316",
                  "#14b8a6",
                  "#a855f7",
                  "#ef4444",
                ];
                return (
                  <div key={name} className="flex h-full items-end gap-0.5">
                    {/* actual – grey */}
                    <div className="relative flex h-19 w-2 items-end rounded-full bg-slate-200">
                      <div
                        className="w-full rounded-full bg-slate-400"
                        style={{ height: `${actual}%` }}
                      />
                    </div>
                    {/* planned – colored */}
                    <div className="relative flex h-19 w-2 items-end rounded-full bg-slate-200">
                      <div
                        className="w-full rounded-full"
                        style={{
                          height: `${planned}%`,
                          backgroundColor:
                            plannedColors[index % plannedColors.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* processes section */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <LayoutList className="size-4 text-slate-400" />
              <span>{view === "list" ? "Processes" : "Job Orders"}</span>
            </div>

            <div className="flex items-center gap-5 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setView("list")}
                className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                  view === "list"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <LayoutList className="size-4" />
                List
              </button>
              <button
                type="button"
                onClick={() => setView("chart")}
                className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                  view === "chart"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <BarChart2 className="size-4" />
                Chart
              </button>
            </div>
          </div>

          {/* list view */}
          {view === "list" && (
            <div className="p-4">
              <Table className="text-sm text-slate-600">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Process
                    </TableHead>
                    <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Function
                    </TableHead>
                    <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Starting Date
                    </TableHead>
                    <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Job Order ID
                    </TableHead>
                    <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Route Id
                    </TableHead>
                    <TableHead className="py-3" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processes.map((row, i) => (
                    <TableRow
                      key={i}
                      className="border-slate-100 hover:bg-slate-50/60"
                    >
                      <TableCell className="py-3.5 font-medium text-slate-600">
                        {row.id}
                      </TableCell>
                      <TableCell className="py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-primary" />
                          <span className="text-slate-500">{row.function}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3.5 text-slate-500">
                        {row.startDate}
                      </TableCell>
                      <TableCell className="py-3.5 text-slate-500">
                        {row.jobOrderId}
                      </TableCell>
                      <TableCell className="py-3.5 text-slate-500">
                        {row.routeId}
                      </TableCell>
                      <TableCell className="py-3.5">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            type="button"
                            className="rounded-md p-1 text-slate-300 hover:text-slate-500 transition-colors"
                          >
                            <Leaf className="size-4" />
                          </button>
                          <button
                            type="button"
                            className="rounded-md p-1 text-slate-300 hover:text-slate-500 transition-colors"
                          >
                            <Scan className="size-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* chart / gantt view */}
          {view === "chart" && (
            <div className="p-4">
              <div className="overflow-x-auto">
                <div className="min-w-130">
                  {ganttRows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="mb-1.5 flex items-center gap-2"
                    >
                      <span className="w-24 shrink-0 truncate text-right text-[11px] font-medium text-slate-600">
                        {row.label}
                      </span>
                      <div className="relative h-7 flex-1 rounded-sm">
                        {row.segments.map(([start, width], si) => (
                          <div
                            key={si}
                            className={`absolute inset-y-1 rounded-sm ${row.color}`}
                            style={{ left: `${start}%`, width: `${width}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* x-axis labels */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-24 shrink-0" />
                    <div className="flex flex-1 justify-between">
                      {timelineLabels.map((label) => (
                        <span
                          key={label}
                          className="text-[10px] text-slate-400"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── right sidebar ────────────────────────────────────────────── */}
      <aside className="flex min-w-0 flex-col gap-4">
        {/* search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search by Job ID"
            className="h-10 rounded-xl border-slate-200 bg-white pl-9 shadow-sm placeholder:text-xs"
          />
        </div>

        {/* alerts / notifications */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* tab toggle */}
          <div className="flex border-b border-slate-100">
            <button
              type="button"
              onClick={() => setAlertTab("alerts")}
              className={`flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                alertTab === "alerts"
                  ? "border-b-2 border-primary text-primary"
                  : "text-slate-400"
              }`}
            >
              <span className="size-2 rounded-full bg-red-500" />
              Alerts
            </button>
            <button
              type="button"
              onClick={() => setAlertTab("notifications")}
              className={`flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                alertTab === "notifications"
                  ? "border-b-2 border-primary text-primary"
                  : "text-slate-400"
              }`}
            >
              <span className="size-2 rounded-full bg-slate-300" />
              Notifications
            </button>
          </div>

          {/* alert items */}
          <div className="divide-y divide-slate-50 px-4 py-2">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-center gap-3 py-3">
                <AlertIcon type={alert.icon} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium text-slate-600">
                    {alert.title}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    ID{" "}
                    <span className="font-semibold text-slate-600">
                      {alert.id}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* recent processes */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
            <Bell className="size-4 text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wide text-slate-700">
              Recent Processes
            </span>
          </div>

          <div className="relative px-5 py-4">
            {/* vertical timeline line */}
            <div className="absolute left-5.5 top-4 bottom-4 w-px bg-slate-200" />

            <div className="space-y-4">
              {recentProcesses.map((proc, i) => (
                <div key={i} className="relative flex gap-3">
                  {/* dot */}
                  <span
                    className={`relative z-10 mt-0.5 size-3 shrink-0 rounded-full ${proc.color} ring-2 ring-white`}
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-500">
                          Function Id
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Starting Date
                        </p>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                          <span className="text-[10px] text-slate-400">
                            Route
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Products
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Material
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                          <span className="text-[10px] text-slate-500 font-medium">
                            {proc.route}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">
                            {proc.products}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">
                            {proc.material}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[12px] font-bold text-primary">
                          {proc.functionId}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {proc.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}









