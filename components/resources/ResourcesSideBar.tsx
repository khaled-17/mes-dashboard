import {
  ArrowRightLeft,
  House,
  Leaf,
  TriangleAlert,
  Search,
} from "lucide-react";
import { Input } from "../ui/input";

const alerts = [
  "Confirm mass on machine",
  "Material in demand",
  "Confirm mass on machine",
];

const suppliers = [
  { tone: "bg-rose-400", value: "900kM" },
  { tone: "bg-rose-500/80", value: "500kM" },
  { tone: "bg-purple-500/80", value: "400kM" },
  { tone: "bg-purple-700/70", value: "460kM" },
  { tone: "bg-slate-900/85", value: "430kM" },
  { tone: "bg-cyan-600", value: "230kM" },
  { tone: "bg-cyan-500", value: "210kM" },
  { tone: "bg-cyan-400", value: "170kM" },
  { tone: "bg-sky-300", value: "140kM" },
  { tone: "bg-cyan-300", value: "100kM" },
];

const ResourcesSideBar = () => {
  return (
    <aside className="w-full max-w-93.75 xl:shrink-0">
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by Material Name - Type"
            className="h-8.5 rounded-xl border-0 bg-white pl-9 shadow-md placeholder:text-xs"
          />
        </div>
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-rose-400">
            <TriangleAlert className="size-4" />
            <span>Alerts</span>
          </div>

          <div className="space-y-4 border-r-4 border-[#0C5674] pr-3">
            {alerts.map((alert, index) => (
              <div key={`${alert}-${index}`} className="flex items-start gap-3">
                {index === 1 ? (
                  <Leaf className="mt-0.5 size-5 text-slate-300" />
                ) : (
                  <House className="mt-0.5 size-5 text-slate-300" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-600">{alert}</p>
                  <div className="mt-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <span>{index === 1 ? "Material ID" : "Warehouse ID"}</span>
                    <span className="text-slate-600">4017702</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#2B5A87]">
            <ArrowRightLeft className="size-4" />
            <span>Top 5 / Least 5</span>
          </div>

          <div className="flex gap-3">
            <div className="min-w-0 flex-1 space-y-3">
              {suppliers.map((supplier, index) => (
                <div
                  key={`${supplier.value}-${index}`}
                  className="grid grid-cols-[8px_minmax(0,1fr)_auto] items-start gap-2 text-[11px] text-slate-400"
                >
                  <span
                    className={`mt-1 size-1.5 rounded-full ${supplier.tone}`}
                  />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate font-semibold text-[#4B7095]">
                      Supplier Name
                    </p>
                    <p className="truncate">Price</p>
                    <p className="truncate">Material 100</p>
                  </div>
                  <div className="pt-0.5 text-right font-semibold text-[#6A88A5]">
                    {supplier.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-6 flex-col overflow-hidden rounded-md">
              {suppliers.map((supplier, index) => (
                <div
                  key={`${supplier.tone}-${index}`}
                  className={supplier.tone}
                  style={{ height: `${index < 5 ? 11 : 9}%` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default ResourcesSideBar;
