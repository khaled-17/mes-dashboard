"use client";

import SectionBreadcrumbs from "@/components/SectionBreadcrumbs";
import { useState } from "react";
import {
  Leaf,
  List,
  Plus,
  Search,
  Signal,
  TrendingUp,
  TriangleAlert,
  Warehouse,
} from "lucide-react";

const ResourcesPage = () => {
  const [recordsView, setRecordsView] = useState<"list" | "profile">("list");

  const materials = [
    { color: "bg-pink-500", type: "Aluminum", weight: "1000", delta: "+100" },
    { color: "bg-rose-500", type: "Sulphat", weight: "1000", delta: "-100" },
    { color: "bg-cyan-500", type: "Cardon", weight: "1000", delta: "+150" },
    {
      color: "bg-violet-500",
      type: "Material Name",
      weight: "1000",
      delta: "+100",
    },
    {
      color: "bg-fuchsia-500",
      type: "Material Name",
      weight: "1000",
      delta: "+100",
    },
    {
      color: "bg-teal-500",
      type: "Material Name",
      weight: "1000",
      delta: "+100",
    },
  ];

  const demandBars = [
    { color: "bg-slate-700", demand: 60, supply: 100 },
    { color: "bg-cyan-500", demand: 45, supply: 80 },
    { color: "bg-purple-700", demand: 70, supply: 90 },
    { color: "bg-pink-500", demand: 35, supply: 50 },
    { color: "bg-red-500", demand: 75, supply: 85 },
    { color: "bg-orange-500", demand: 65, supply: 95 },
    { color: "bg-amber-500", demand: 30, supply: 60 },
    { color: "bg-emerald-500", demand: 80, supply: 90 },
    { color: "bg-cyan-500", demand: 60, supply: 75 },
    { color: "bg-lime-500", demand: 50, supply: 70 },
    { color: "bg-sky-900", demand: 40, supply: 65 },
    { color: "bg-yellow-500", demand: 70, supply: 85 },
    { color: "bg-pink-600", demand: 75, supply: 95 },
    { color: "bg-gray-400", demand: 0, supply: 100 },
  ];

  const profileRows = [
    {
      label: "Material 01",
      color: "border-cyan-400 bg-cyan-100/70",
      segments: [1, 0, 1, 1, 0, 1],
    },
    {
      label: "Material 01",
      color: "border-pink-400 bg-pink-100/70",
      segments: [1, 0, 0, 1, 0, 1],
    },
    {
      label: "Material 01",
      color: "border-teal-400 bg-teal-100/70",
      segments: [1, 0, 1, 0, 1, 1],
    },
    {
      label: "Material 01",
      color: "border-fuchsia-400 bg-fuchsia-100/70",
      segments: [1, 0, 0, 1, 0, 1],
    },
    {
      label: "Material 01",
      color: "border-amber-400 bg-amber-100/70",
      segments: [1, 0, 1, 0, 1, 1],
    },
    {
      label: "Material 01",
      color: "border-violet-500 bg-violet-100/70",
      segments: [1, 0, 1, 1, 0, 1],
    },
    {
      label: "Material 01",
      color: "border-indigo-500 bg-indigo-100/70",
      segments: [1, 0, 1, 0, 1, 1],
    },
  ];

  return (
    <div className="min-w-0 space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SectionBreadcrumbs />

        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90">
            <Plus className="h-4 w-4" />
            ADD NEW
          </button>

          <label className="relative block w-full min-w-0 sm:w-72">
            <span className="sr-only">Search materials by name or type</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Material Name - Type"
              className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="space-y-4 xl:col-span-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Total Material Consumption Card 1 */}

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-1">
              <div className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Leaf className="h-4 w-4 text-slate-500" />
                Total Material Consumption
              </div>

              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-slate-800">5,000</p>
                  <p className="text-xs font-semibold text-primary">
                    Actual Consumption
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-800">7,000</p>
                  <p className="text-xs text-slate-400">Planned Consumption</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-full rounded-full bg-slate-200">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
                <span className="text-3xl font-bold text-slate-800">75%</span>
              </div>
            </div>

            {/* Material Supply Vs Demand Card 2  */}

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
              <div className="mb-7 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Signal className="h-4 w-4 text-slate-500" />
                Material Supply Vs Demand
              </div>

              <div className="flex items-end justify-evenly gap-2">
                {demandBars.map((bar, index) => (
                  <div key={index} className="flex h-16 items-end">
                    <div
                      className={`relative w-2 rounded-xs bg-slate-200 `}
                      style={{ height: `${bar.supply}%` }}
                    >
                      <div
                        className={`absolute bottom-0 left-0 w-full rounded-xs  ${bar.color}`}
                        style={{ height: `${bar.demand}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table Section  */}

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5">
              <div className="min-w-0 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Leaf className="h-4 w-4 text-slate-500" />
                <span className="truncate">Material Supplier Records</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <button
                  onClick={() => setRecordsView("list")}
                  className={`inline-flex items-center gap-2 border-b-2 pb-2 font-semibold transition-colors ${
                    recordsView === "list"
                      ? "border-primary text-primary"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <List className="h-4 w-4" />
                  Material List
                </button>

                <button
                  onClick={() => setRecordsView("profile")}
                  className={`inline-flex items-center gap-2 border-b-2 pb-2 font-semibold transition-colors ${
                    recordsView === "profile"
                      ? "border-primary text-primary"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  Material Profile
                </button>
              </div>
            </div>

            {recordsView === "list" ? (
              <div className="px-5 py-4">
                <label className="relative block w-full min-w-0 sm:w-72">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    aria-label="Search material supplier records by material name or type"
                    placeholder="Search by Material Name - Type"
                    className="h-10 w-full border-b border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition-colors"
                  />
                </label>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full table-auto text-center text-sm">
                    <thead>
                      <tr className=" text-xs text-slate-500">
                        <th className="py-2 font-semibold">Material Type</th>
                        <th className="py-2 font-semibold">Current Weight</th>
                        <th className="py-2 font-semibold">Last Change</th>
                        <th className="py-2 font-semibold">
                          Last Order Date Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map((material, index) => (
                        <tr
                          key={`${material.type}-${index}`}
                          className="border-t border-slate-100 text-slate-600"
                        >
                          <td className="px-2 text-left">
                            <div className="flex min-w-0 items-center gap-3">
                              <span
                                className={`h-2.5 w-2.5 shrink-0 rounded-full ${material.color}`}
                              />
                              <span className="truncate">{material.type}</span>
                            </div>
                          </td>
                          <td className="py-3 ">{material.weight}</td>
                          <td className="py-3 ">{material.delta}</td>
                          <td className="py-3 ">
                            9:00 &nbsp; | &nbsp; 3-29-2021
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-5">
                <div className="overflow-x-auto">
                  <div className="min-w-[760px] lg:min-w-0">
                    <div className="mb-4 border-b border-slate-200" />

                    {profileRows.map((row, rowIndex) => (
                      <div
                        key={`${row.label}-${rowIndex}`}
                        className="grid grid-cols-[100px_1fr] items-center gap-3 sm:grid-cols-[130px_1fr]"
                      >
                        <p className="truncate text-sm font-semibold text-slate-700 sm:text-base">
                          {row.label}
                        </p>

                        <div className="relative h-12 border-l border-slate-300">
                          <div className="absolute inset-x-0 top-1/2 border-t border-dotted border-slate-200" />

                          <div className="absolute inset-0 flex">
                            {row.segments.map((segment, segmentIndex) => (
                              <div
                                key={`${rowIndex}-${segmentIndex}`}
                                className={`h-full w-full border-y-2 ${
                                  segment
                                    ? row.color
                                    : "border-transparent bg-transparent"
                                } ${segmentIndex === 0 ? "border-l-2" : ""} ${
                                  segmentIndex === row.segments.length - 1
                                    ? "border-r-2"
                                    : ""
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="grid grid-cols-[100px_1fr] items-center gap-3 pt-2 sm:grid-cols-[130px_1fr]">
                      <div />
                      <div className="grid grid-cols-6 text-center text-[11px] font-medium text-slate-400 sm:text-xs">
                        <span>Today</span>
                        <span>03-28</span>
                        <span>03-29</span>
                        <span>03-30</span>
                        <span>04-01</span>
                        <span>05-02</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 xl:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Alert  */}

            <div className="border-b border-slate-100 px-4 py-3 text-sm font-bold text-rose-500">
              ALERTS
            </div>
            <div className="space-y-1 px-4 py-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-b-0"
                >
                  <Warehouse className="mt-0.5 h-4 w-4 text-slate-400" />
                  <div className="text-sm text-slate-700">
                    <p>Confirm mass on machine</p>
                    <p className="text-xs font-semibold text-slate-500">
                      ID 4017702
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Top 5 / Least 5 Materials Nearing Reorder Level  */}

            <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-sm font-bold text-slate-700">
              <TriangleAlert className="h-4 w-4 text-slate-500" />
              TOP 5 / LEAST 5
            </div>

            <div className="space-y-2 p-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-xs text-slate-500"
                >
                  <span>Material Name</span>
                  <span>{900 - index * 80}KM</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
