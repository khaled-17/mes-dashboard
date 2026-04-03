"use client";

import { Signal } from "lucide-react";

function ResourcesCharts() {
  const demandBars = [60, 42, 66, 36, 72, 65, 18, 58, 49, 34, 60, 72, 64, 78];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm col-span-2 ml-6">
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
  );
}

export default ResourcesCharts;
