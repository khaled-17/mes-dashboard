"use client";

import { useState } from "react";
import { Leaf, List, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ResourcesTable() {
  const [view, setView] = useState<"list" | "profile">("list");

  const materials = [
    {
      id: 1,
      name: "Product Name",
      type: "AlProduct",
      weight: "1000",
      date: "4/29-2021",
      color: "bg-pink-500 ",
    },
    {
      id: 2,
      name: "Product Name",
      type: "Sup-Product",
      weight: "1000",
      date: "4/29-2021",
      color: "bg-rose-500",
    },
    {
      id: 3,
      name: "Product Name",
      type: "Scrap",
      weight: "1000",
      date: "7/29-2021",
      color: "bg-cyan-500",
    },
    {
      id: 4,
      name: "Product Name",
      type: "Product",
      weight: "1000",
      date: "9/29-2021",
      color: "bg-cyan-500",
    },
    {
      id: 5,
      name: "Product Name",
      type: "Product",
      weight: "1000",
      date: "29-2021",
      color: "bg-cyan-500",
    },
    {
      id: 6,
      name: "Product Name",
      type: "Product",
      weight: "1000",
      date: "8 /29-2021",
      color: "bg-cyan-500",
    },
  ];

  const profileRows = [
    { id: 1, label: "Material 01", segments: [1, 0, 1, 1, 0, 1] },
    { id: 2, label: "Material 02", segments: [1, 1, 0, 1, 1, 1] },
    { id: 3, label: "Material 03", segments: [0, 0, 1, 1, 0, 1] },
  ];

  const timelineLabels = ["Today", "03-28", "03-29", "03-30", "04-01", "05-02"];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* HEADER */}
      <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Leaf className="size-4 text-slate-500" />
          <span>Material Supplier Records</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-semibold">
          <button
            onClick={() => setView("list")}
            className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
              view === "list"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            <List className="size-4" />
            Products List
          </button>

          <button
            onClick={() => setView("profile")}
            className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-colors ${
              view === "profile"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            <TrendingUp className="size-4" />
            Product Charts
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {view === "list" ? (
        <div className="p-6">
          {/* SEARCH */}
          <div className="relative mb-7 w-full max-w-xs  ">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search..."
              className="pl-9 border-0 border-b rounded-none  "
            />
          </div>

          {/* TABLE */}
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4 text-center">Output Name</TableHead>
                <TableHead className="w-1/4 text-center">Output Type</TableHead>
                <TableHead className="w-1/4 text-center"></TableHead>
                <TableHead className="w-1/4 text-center">Date Time</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {materials.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`w-2 h-2 rounded-full }`} />
                      {m.name}
                    </div>
                  </TableCell>

                  <TableCell className="text-center">{m.type}</TableCell>

                  <TableCell className="text-center">
                    <div className="flex gap-3">
                      <div className={`w-3 h-3 rounded-full ${m.color} }`} />
                      <div className={`w-3 h-3 rounded-full ${m.color} }`} />
                      <div className={`w-3 h-3 rounded-full ${m.color} }`} />
                      <div className={`w-3 h-3 rounded-full ${m.color} }`} />
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    9:00 <span className="px-2 text-slate-300">|</span>{" "}
                    3-29-2021
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="p-6">
          {/* PROFILE CARD */}
          <div className="rounded-lg border border-slate-200 p-4">
            {profileRows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[80px_1fr] items-center gap-3 mb-3"
              >
                <span className="text-sm font-medium text-slate-600">
                  {row.label}
                </span>

                <div className="flex">
                  {row.segments.map((segment, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-6 border ${
                        segment
                          ? "bg-primary/60 border-primary"
                          : "border-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* TIMELINE */}
            <div className="grid grid-cols-[80px_1fr] mt-4">
              <div />
              <div className="grid grid-cols-6 text-xs text-center text-slate-400">
                {timelineLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
