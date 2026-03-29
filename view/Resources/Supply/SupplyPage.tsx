"use client";

import { useState } from "react";
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
import {
  ChevronDown,
  Factory,
  Leaf,
  List,
  Plus,
  Search,
  Signal,
  Sparkles,
} from "lucide-react";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";

const supplierRows = [
  {
    id: 1,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 2,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 3,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 4,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 5,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 6,
    name: "Supplier Name",
    code: "1000",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
];

const supplyDemandBars = [
  72, 52, 78, 44, 84, 76, 26, 66, 58, 46, 72, 84, 68, 88,
];

const bubbleRows = [
  "Material 01",
  "Material 02",
  "Material 03",
  "Material 04",
  "Material 05",
  "Material 05",
  "Material 05",
];

const bubblePoints = [
  { top: "8%", left: "22%", size: "0.9rem", color: "bg-cyan-400/85" },
  { top: "8%", left: "29%", size: "0.7rem", color: "bg-cyan-400/75" },
  { top: "7%", left: "43%", size: "1.2rem", color: "bg-cyan-400/80" },
  { top: "8%", left: "45%", size: "0.95rem", color: "bg-cyan-400/70" },
  { top: "8%", left: "58%", size: "1.35rem", color: "bg-cyan-400/78" },
  { top: "8%", left: "75%", size: "1.3rem", color: "bg-cyan-400/82" },
  { top: "8%", left: "84%", size: "0.8rem", color: "bg-cyan-400/78" },
  { top: "8%", left: "91%", size: "0.6rem", color: "bg-cyan-400/70" },
  { top: "23%", left: "7%", size: "1rem", color: "bg-rose-400/78" },
  { top: "22%", left: "19%", size: "1.35rem", color: "bg-rose-400/70" },
  { top: "22%", left: "33%", size: "1.75rem", color: "bg-rose-400/72" },
  { top: "23%", left: "41%", size: "0.95rem", color: "bg-rose-400/72" },
  { top: "23%", left: "49%", size: "0.8rem", color: "bg-rose-400/70" },
  { top: "22%", left: "66%", size: "1.6rem", color: "bg-rose-400/72" },
  { top: "23%", left: "79%", size: "0.75rem", color: "bg-rose-400/70" },
  { top: "22%", left: "89%", size: "1.2rem", color: "bg-rose-400/76" },
  { top: "22%", left: "92%", size: "1.1rem", color: "bg-rose-400/74" },
  { top: "38%", left: "12%", size: "0.9rem", color: "bg-teal-400/75" },
  { top: "38%", left: "22%", size: "0.85rem", color: "bg-teal-400/70" },
  { top: "38%", left: "45%", size: "1.15rem", color: "bg-teal-400/76" },
  { top: "38%", left: "58%", size: "1.25rem", color: "bg-teal-400/72" },
  { top: "37%", left: "61%", size: "1.8rem", color: "bg-teal-400/76" },
  { top: "38%", left: "75%", size: "1.45rem", color: "bg-teal-400/76" },
  { top: "38%", left: "85%", size: "1.05rem", color: "bg-teal-400/76" },
  { top: "53%", left: "7%", size: "0.75rem", color: "bg-slate-500/78" },
  { top: "52%", left: "31%", size: "2.2rem", color: "bg-slate-500/78" },
  { top: "53%", left: "37%", size: "1.4rem", color: "bg-slate-500/78" },
  { top: "53%", left: "79%", size: "0.7rem", color: "bg-slate-500/78" },
  { top: "53%", left: "91%", size: "0.7rem", color: "bg-slate-500/78" },
  { top: "69%", left: "22%", size: "1.5rem", color: "bg-purple-400/70" },
  { top: "69%", left: "58%", size: "1.35rem", color: "bg-purple-400/70" },
  { top: "68%", left: "62%", size: "2rem", color: "bg-purple-400/70" },
  { top: "69%", left: "69%", size: "0.95rem", color: "bg-purple-400/70" },
  { top: "84%", left: "7%", size: "1rem", color: "bg-amber-400/80" },
  { top: "84%", left: "31%", size: "0.7rem", color: "bg-amber-400/80" },
  { top: "84%", left: "39%", size: "0.7rem", color: "bg-amber-400/80" },
  { top: "83%", left: "75%", size: "2rem", color: "bg-amber-400/82" },
  { top: "84%", left: "91%", size: "1.1rem", color: "bg-amber-400/82" },
];

const SupplyPage = () => {
  const [activeView, setActiveView] = useState<"list" | "supply">("supply");

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <BreadcrumbsComponent />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="h-10 gap-2 rounded-lg px-6 shadow-md">
            <Plus className="size-4" />
            ADD NEW
          </Button>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search by Material Name - Type"
              className="h-10 rounded-xl border-0 bg-white pl-9 shadow-md placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(260px,280px)_minmax(0,1fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Leaf className="size-4 text-slate-500" />
            <span>Total Material Consumption</span>
          </div>

          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-4xl font-bold tracking-tight text-slate-800">
                5,000
              </p>
              <p className="text-xs uppercase tracking-wide text-primary">
                Actual Consumption
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold tracking-tight text-slate-800">
                7,000
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Planned Consumption
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

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Signal className="size-4 text-slate-500" />
            <span>Material Supply Vs Demand</span>
          </div>

          <div className="flex h-30 items-end justify-between gap-4 overflow-hidden px-4 pb-2">
            {supplyDemandBars.map((height, index) => (
              <div key={`${height}-${index}`} className="flex h-full items-end">
                <div className="relative flex h-19 w-2 items-end rounded-full bg-slate-200">
                  <div
                    className={`w-full rounded-full ${index % 5 === 0 ? "bg-slate-700" : index % 5 === 1 ? "bg-cyan-400" : index % 5 === 2 ? "bg-fuchsia-500" : index % 5 === 3 ? "bg-rose-400" : "bg-amber-400"}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Factory className="size-4 text-slate-500" />
            <span>Material Supplier Records</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveView("list")}
              className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                activeView === "list"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              <List className="size-4" />
              Material List
            </button>

            <button
              type="button"
              onClick={() => setActiveView("supply")}
              className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                activeView === "supply"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              <Sparkles className="size-4" />
              Material Supply
            </button>
          </div>
        </div>

        {activeView === "list" ? (
          <div className="p-6">
            <div className="relative mb-5 w-full max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by load Name"
                className="h-10 rounded-none border-0 border-b border-slate-200 pl-9 shadow-none"
              />
            </div>

            <Table className="min-w-160 text-sm text-slate-600">
              <TableHeader className="[&_tr]:border-slate-100">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-8 px-0 py-3"></TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Supplier Name
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Supplier Code
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Last Material
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Last Order Date Time
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {supplierRows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-slate-100 hover:bg-transparent"
                  >
                    <TableCell className="px-0 py-4 text-center text-slate-400">
                      <ChevronDown className="mx-auto size-4" />
                    </TableCell>
                    <TableCell className="py-4 font-medium text-slate-500">
                      {row.name}
                    </TableCell>
                    <TableCell className="py-4">{row.code}</TableCell>
                    <TableCell className="py-4">{row.material}</TableCell>
                    <TableCell className="py-4">
                      {row.time}
                      <span className="px-3 text-slate-300">|</span>
                      {row.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="overflow-x-auto px-6 py-5">
            <div className="min-w-175 rounded-b-2xl">
              <div className="grid grid-cols-[96px_repeat(6,minmax(0,1fr))] items-end gap-2 px-6 pb-3 text-xs font-semibold text-slate-300">
                <div></div>
                <div className="text-center">Today</div>
                <div className="text-center">03-28</div>
                <div className="text-center">03-29</div>
                <div className="text-center">03-30</div>
                <div className="text-center">04-01</div>
                <div className="text-center">05-02</div>
              </div>

              <div className="relative h-80 rounded-2xl bg-white px-6 pb-5 pt-3">
                {bubbleRows.map((label, index) => (
                  <div
                    key={`${label}-${index}`}
                    className="grid h-11 grid-cols-[96px_1fr] items-center border-t border-dashed border-slate-200 first:border-t-0"
                  >
                    <div className="pr-4 text-sm font-semibold text-slate-600">
                      {label}
                    </div>
                    <div className="relative h-full">
                      {index === 0 && (
                        <div className="absolute left-0 top-0 h-full w-px bg-slate-300" />
                      )}
                    </div>
                  </div>
                ))}

                <div className="pointer-events-none absolute inset-x-30 top-0 h-full">
                  {bubblePoints.map((point, index) => (
                    <span
                      key={`${point.left}-${point.top}-${index}`}
                      className={`absolute rounded-full ${point.color} shadow-sm`}
                      style={{
                        left: point.left,
                        top: point.top,
                        width: point.size,
                        height: point.size,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SupplyPage;
