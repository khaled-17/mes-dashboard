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
  ChartNoAxesCombined,
  ChevronDown,
  Factory,
  Leaf,
  List,
  Plus,
  Search,
  Signal,
} from "lucide-react";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";

const weightRows = [
  {
    id: 1,
    scaleId: 355678,
    lastScaleType: "newly supplied",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 2,
    scaleId: 455367,
    lastScaleType: "post process",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 3,
    scaleId: 434355,
    lastScaleType: "scale",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 4,
    scaleId: 423456,
    lastScaleType: "newly supplied",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 5,
    scaleId: 557788,
    lastScaleType: "post process",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
  {
    id: 6,
    scaleId: 767687,
    lastScaleType: "post process",
    material: "Aluminum",
    time: "9:00",
    date: "3-29-2021",
  },
];

const supplyDemandBars = [
  72, 52, 78, 44, 84, 76, 26, 66, 58, 46, 72, 84, 68, 88,
];

const bubbleRows = [
  "Scale 01",
  "Scale 02",
  "Scale 03",
  "Scale 04",
  "Scale 05",
  "Scale 06",
  "Scale 07",
  "Scale 08",
];

const bubblePoints = [
  // Scale 01 - rose overlapping pair, cyan small, large slate, cyan pair, amber small, large green, large cyan, teal small, cyan tiny
  { top: "8%", left: "14%", size: "1.6rem", color: "bg-rose-400/75" },
  { top: "7%", left: "17%", size: "1.2rem", color: "bg-rose-300/65" },
  { top: "8%", left: "23%", size: "0.6rem", color: "bg-cyan-400/80" },
  { top: "7%", left: "35%", size: "1.8rem", color: "bg-cyan-400/85" },
  { top: "8%", left: "38%", size: "1.2rem", color: "bg-cyan-300/70" },
  { top: "7%", left: "42%", size: "2.2rem", color: "bg-slate-500/82" },
  { top: "8%", left: "48%", size: "1.4rem", color: "bg-cyan-400/78" },
  { top: "8%", left: "52%", size: "0.8rem", color: "bg-amber-400/80" },
  { top: "7%", left: "60%", size: "2rem", color: "bg-green-400/75" },
  { top: "7%", left: "76%", size: "2rem", color: "bg-cyan-400/82" },
  { top: "8%", left: "85%", size: "0.75rem", color: "bg-teal-400/75" },
  { top: "8%", left: "92%", size: "0.6rem", color: "bg-cyan-400/70" },

  // Scale 02 - rose small, rose medium, large purple, rose small, rose tiny, large rose/salmon, rose small, rose overlapping pair
  { top: "22%", left: "14%", size: "1rem", color: "bg-rose-400/72" },
  { top: "22%", left: "28%", size: "1.4rem", color: "bg-rose-400/70" },
  { top: "21%", left: "42%", size: "2.4rem", color: "bg-purple-400/72" },
  { top: "22%", left: "48%", size: "1.1rem", color: "bg-rose-400/70" },
  { top: "22%", left: "56%", size: "0.65rem", color: "bg-rose-400/68" },
  { top: "21%", left: "65%", size: "2rem", color: "bg-rose-300/72" },
  { top: "22%", left: "80%", size: "0.8rem", color: "bg-rose-400/70" },
  { top: "21%", left: "89%", size: "1.5rem", color: "bg-rose-400/75" },
  { top: "22%", left: "93%", size: "1.2rem", color: "bg-rose-300/68" },

  // Scale 03 - teal small x2, teal small, teal medium, teal+orange overlap, large purple, teal medium
  { top: "37%", left: "17%", size: "0.85rem", color: "bg-teal-400/75" },
  { top: "37%", left: "29%", size: "0.85rem", color: "bg-teal-400/70" },
  { top: "37%", left: "48%", size: "1.2rem", color: "bg-teal-400/76" },
  { top: "36%", left: "59%", size: "1.4rem", color: "bg-teal-400/72" },
  { top: "36%", left: "62%", size: "2rem", color: "bg-orange-300/72" },
  { top: "37%", left: "76%", size: "1.8rem", color: "bg-purple-400/72" },
  { top: "37%", left: "85%", size: "1.1rem", color: "bg-teal-400/76" },

  // Scale 04 - small slate, large green, medium slate
  { top: "51%", left: "17%", size: "0.8rem", color: "bg-slate-500/80" },
  { top: "50%", left: "42%", size: "2.4rem", color: "bg-green-400/76" },
  { top: "51%", left: "48%", size: "1.6rem", color: "bg-slate-500/78" },

  // Scale 05 - tiny slate left, small slate right x2
  { top: "63%", left: "17%", size: "0.75rem", color: "bg-slate-500/75" },
  { top: "63%", left: "80%", size: "0.65rem", color: "bg-slate-600/75" },
  { top: "63%", left: "92%", size: "0.65rem", color: "bg-slate-600/75" },

  // Scale 06 - empty

  // Scale 07 - medium purple, cyan small + large purple overlapping, small mauve/pink
  { top: "80%", left: "29%", size: "1.6rem", color: "bg-purple-400/70" },
  { top: "79%", left: "59%", size: "1.2rem", color: "bg-cyan-400/78" },
  { top: "79%", left: "63%", size: "2.4rem", color: "bg-purple-400/70" },
  { top: "80%", left: "71%", size: "0.9rem", color: "bg-rose-300/65" },

  // Scale 08 - amber left, teal small, amber small, large slate, amber right
  { top: "92%", left: "14%", size: "1.2rem", color: "bg-amber-400/82" },
  { top: "92%", left: "42%", size: "0.75rem", color: "bg-teal-400/75" },
  { top: "92%", left: "48%", size: "0.7rem", color: "bg-amber-400/78" },
  { top: "91%", left: "76%", size: "2.6rem", color: "bg-slate-500/76" },
  { top: "92%", left: "92%", size: "1.3rem", color: "bg-amber-400/82" },
];

const WeightPage = () => {
  const [activeView, setActiveView] = useState<"list" | "record">("list");

  return (
    <div className="space-y-4">
      {/* <BreadcrumbsComponent /> */}
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
              Scale List
            </button>

            <button
              type="button"
              onClick={() => setActiveView("record")}
              className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                activeView === "record"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              <ChartNoAxesCombined className="size-4" />
              Scale Records
            </button>
          </div>
        </div>

        {activeView === "list" ? (
          <div className={`pl-11.5 pb-14.5 pt-3.75 pr-[30.5px]`}>
            <div className="relative mb-5 w-full max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by load Name"
                className="h-10 rounded-none border-0 border-b border-slate-200 pl-9 shadow-none"
              />
            </div>

            <Table className="min-w-160 text-sm text-slate-600 ">
              <TableHeader className="border-slate-400  ">
                <TableRow className="hover:bg-transparent *:text-center *:font-bold">
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-[#707070]">
                    Scale ID
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-[#707070]">
                    Last Scale Type
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-[#707070]">
                    Last Material
                  </TableHead>
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-[#707070]">
                    Last Order Date Time
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {weightRows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-slate-100  hover:bg-transparent *:text-center"
                  >
                    <TableCell className="py-4 font-medium text-slate-500 flex items-center gap-[45.23px] justify-center">
                      <ChevronDown className="size-4" />
                      <span>{row.scaleId}</span>
                    </TableCell>
                    <TableCell className="py-4">{row.lastScaleType}</TableCell>
                    <TableCell className="py-4">{row.material}</TableCell>
                    <TableCell className="py-4 tracking-[0.24px] space-x-3">
                      <span>{row.time}</span>
                      <span className="px-3 text-black">|</span>
                      <span>{row.date}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="overflow-x-auto px-6 py-5 pb-10">
            <div className="min-w-175 rounded-b-2xl">
              <div className="relative h-80 rounded-2xl bg-white px-6 pb-5 pt-3">
                {bubbleRows.map((label, index) => (
                  <div
                    key={`${label}-${index}`}
                    className="grid h-9 grid-cols-[96px_1fr] items-center border-slate-200 first:border-t-0"
                  >
                    <div className="pr-4 text-sm font-semibold text-slate-600">
                      {label}
                    </div>
                    <div className="relative h-full border-t border-dashed mt-10 border-l border-slate-300">
                      {index === 0 && (
                        <div className="absolute left-0 top-0 h-full w-px bg-slate-300" />
                      )}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-[96px_repeat(6,minmax(0,1fr))] items-end gap-2 px-6 pb-3 text-xs font-semibold text-slate-300 py-5">
                  <div></div>
                  <div className="text-center">Today</div>
                  <div className="text-center">03-28</div>
                  <div className="text-center">03-29</div>
                  <div className="text-center">03-30</div>
                  <div className="text-center">04-01</div>
                  <div className="text-center">05-02</div>
                </div>

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

export default WeightPage;
