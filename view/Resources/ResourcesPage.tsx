"use client";

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
import { useState } from "react";
import { Leaf, List, Plus, Search, Signal, TrendingUp } from "lucide-react";
import BreadcrumbsComponent from "@/components/BreadcrumbComponent";

const materials = [
  { color: "bg-pink-500", type: "Aluminum", weight: "1000", delta: "+ 100" },
  { color: "bg-rose-500", type: "Sulphat", weight: "1000", delta: "- 100" },
  { color: "bg-cyan-500", type: "Cardon", weight: "1000", delta: "+ 150" },
  {
    color: "bg-violet-500",
    type: "Material Name",
    weight: "1000",
    delta: "+ 100",
  },
  {
    color: "bg-fuchsia-500",
    type: "Material Name",
    weight: "1000",
    delta: "+ 100",
  },
  {
    color: "bg-teal-500",
    type: "Material Name",
    weight: "1000",
    delta: "+ 100",
  },
];

const demandBars = [60, 42, 66, 36, 72, 65, 18, 58, 49, 34, 60, 72, 64, 78];

const timelineLabels = ["Today", "03-28", "03-29", "03-30", "04-01", "05-02"];

const profileRows = [
  {
    label: "Material 01",
    color: "border-cyan-300 bg-cyan-100/70",
    segments: [1, 0, 1, 1, 0, 1],
  },
  {
    label: "Material 01",
    color: "border-pink-300 bg-pink-100/70",
    segments: [1, 0, 0, 1, 0, 1],
  },
  {
    label: "Material 01",
    color: "border-teal-300 bg-teal-100/70",
    segments: [1, 1, 0, 1, 1, 1],
  },
  {
    label: "Material 01",
    color: "border-fuchsia-200 bg-fuchsia-50/80",
    segments: [0, 0, 1, 1, 0, 1],
  },
  {
    label: "Material 01",
    color: "border-amber-300 bg-amber-100/70",
    segments: [1, 0, 1, 1, 0, 1],
  },
  {
    label: "Material 01",
    color: "border-violet-200 bg-violet-50/80",
    segments: [1, 0, 1, 1, 0, 1],
  },
  {
    label: "Material 01",
    color: "border-slate-300 bg-slate-100/80",
    segments: [1, 0, 1, 0, 1, 1],
  },
];

const ResourcesPage = () => {
  const [recordsView, setRecordsView] = useState<"list" | "profile">("list");

  return (
    <div className="min-w-0 space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <BreadcrumbsComponent />

        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="h-10 gap-2 rounded-lg px-6 shadow-md">
            <Plus className="size-4" />
            ADD NEW
          </Button>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
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
            {demandBars.map((height, index) => (
              <div key={`${height}-${index}`} className="flex h-full items-end">
                <div className="relative flex h-19 w-2 items-end rounded-full bg-slate-200">
                  <div
                    className={`w-full rounded-full ${
                      index % 5 === 0
                        ? "bg-slate-700"
                        : index % 5 === 1
                          ? "bg-cyan-400"
                          : index % 5 === 2
                            ? "bg-fuchsia-500"
                            : index % 5 === 3
                              ? "bg-rose-400"
                              : "bg-amber-400"
                    }`}
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
            <Leaf className="size-4 text-slate-500" />
            <span>Material Supplier Records</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setRecordsView("list")}
              className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                recordsView === "list"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              <List className="size-4" />
              Material List
            </button>

            <button
              type="button"
              onClick={() => setRecordsView("profile")}
              className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
                recordsView === "profile"
                  ? "border-primary text-primary"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              <TrendingUp className="size-4" />
              Material Profile
            </button>
          </div>
        </div>

        {recordsView === "list" ? (
          <div className="p-6">
            <div className="relative mb-5 w-full max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                aria-label="Search material supplier records by material name or type"
                placeholder="Search by load Name"
                className="h-10 rounded-none border-0 border-b border-slate-200 pl-9 shadow-none"
              />
            </div>

            <Table className="text-sm text-slate-600">
              <TableHeader className="[&_tr]:border-slate-100">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Material Type
                  </TableHead>
                  <TableHead className="py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Current Weight
                  </TableHead>
                  <TableHead className="py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Last Change
                  </TableHead>
                  <TableHead className="py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Last Order Date Time
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {materials.map((material, index) => (
                  <TableRow
                    key={`${material.type}-${index}`}
                    className="border-slate-100 hover:bg-transparent"
                  >
                    <TableCell className="py-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${material.color}`}
                        />
                        <span className="truncate font-medium text-slate-500">
                          {material.type}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      {material.weight}
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      {material.delta}
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      9:00
                      <span className="px-3 text-slate-300">|</span>
                      3-29-2021
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="overflow-x-auto px-6 py-5">
            <div className="min-w-190 lg:min-w-0">
              {profileRows.map((row, rowIndex) => (
                <div
                  key={`${row.label}-${rowIndex}`}
                  className="grid grid-cols-[72px_1fr] items-center gap-3"
                >
                  <p className="truncate text-xs font-semibold text-slate-700">
                    {row.label}
                  </p>

                  <div className="relative h-11 border-l border-slate-300">
                    <div className="absolute inset-x-0 top-1/2 border-t border-dotted border-slate-200" />

                    <div className="absolute inset-0 flex">
                      {row.segments.map((segment, segmentIndex) => (
                        <div
                          key={`${rowIndex}-${segmentIndex}`}
                          className={`h-full w-full border-y ${
                            segment
                              ? row.color
                              : "border-transparent bg-transparent"
                          } ${segmentIndex === 0 ? "border-l" : ""} ${
                            segmentIndex === row.segments.length - 1
                              ? "border-r"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-[72px_1fr] items-center gap-3 pt-2">
                <div />
                <div className="grid grid-cols-6 text-center text-[11px] font-medium text-slate-300">
                  {timelineLabels.map((label) => (
                    <span key={label}>{label}</span>
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

export default ResourcesPage;
