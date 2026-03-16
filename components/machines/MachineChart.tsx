"use client";

import { useState } from "react"
import { Settings2, List, BarChart2 } from "lucide-react";


interface Segment {
  color: string;
  widthPct: number; // % of total bar
}

interface MachineRow {
  id: string;
  name: string;
  segments: Segment[];
}

// const TIME_LABELS = [
//   "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
//   "06:00", "07:00", "08:00", "09:00", "10:00",
// ];

const FUNCTION_COLORS = [
  "#e879a0", "#4ade80", "#22d3ee", "#f97316",
  "#a855f7", "#facc15", "#f43f5e", "#84cc16", "#0f172a",
];

const NAV_ITEMS = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Resources", icon: "resources" },
  { label: "Manufacturing", icon: "manufacturing" },
  { label: "Machines", icon: "machines", active: true },
  { label: "Planning", icon: "planning" },
  { label: "Issues", icon: "issues" },
];

const TABS = ["INFORMATION", "STATISTICS", "HISTORY", "DIGITAL TWIN"];
const DATE_FILTERS = ["Today", "Yesterday", "Last Week"];
const LAYER_TABS = ["FUNCTION", "MATERIAL", "PRODUCT"];


interface ChartData {
  machineId: string;
  machineName: string;
  segments: {
    id: string;
    function: string;
    startTime: Date;
    endTime: Date;
    status: "active" | "idle" | "maintenance" | "error";
    material?: string;
    operator?: string;
  }[];
}

const MACHINES: MachineRow[] = [
  { id: "MCH-001", name: "Machine\nName", segments: [{ color: "#e879a0", widthPct: 28 }, { color: "#4ade80", widthPct: 12 }, { color: "#d1d5db", widthPct: 15 }, { color: "#a855f7", widthPct: 30 }, { color: "#d1d5db", widthPct: 15 }] },
  { id: "MCH-002", name: "Machine\nName", segments: [{ color: "#4ade80", widthPct: 20 }, { color: "#d1d5db", widthPct: 10 }, { color: "#a855f7", widthPct: 40 }, { color: "#d1d5db", widthPct: 10 }, { color: "#f87171", widthPct: 20 }] },
  { id: "MCH-003", name: "Machine\nName", segments: [{ color: "#22d3ee", widthPct: 18 }, { color: "#f97316", widthPct: 22 }, { color: "#d1d5db", widthPct: 20 }, { color: "#4ade80", widthPct: 25 }, { color: "#d1d5db", widthPct: 15 }] },
  { id: "MCH-004", name: "Machine\nName", segments: [{ color: "#facc15", widthPct: 30 }, { color: "#d1d5db", widthPct: 10 }, { color: "#84cc16", widthPct: 35 }, { color: "#d1d5db", widthPct: 25 }] },
  { id: "MCH-005", name: "Machine\nName", segments: [{ color: "#f43f5e", widthPct: 15 }, { color: "#f97316", widthPct: 20 }, { color: "#0f172a", widthPct: 18 }, { color: "#d1d5db", widthPct: 47 }] },
  { id: "MCH-006", name: "Machine\nName", segments: [{ color: "#d1d5db", widthPct: 8 }, { color: "#a855f7", widthPct: 52 }, { color: "#d1d5db", widthPct: 40 }] },
  { id: "MCH-007", name: "Machine\nName", segments: [{ color: "#22d3ee", widthPct: 25 }, { color: "#d1d5db", widthPct: 10 }, { color: "#e879a0", widthPct: 40 }, { color: "#d1d5db", widthPct: 25 }] },
  { id: "MCH-008", name: "Machine\nName", segments: [{ color: "#4ade80", widthPct: 45 }, { color: "#d1d5db", widthPct: 15 }, { color: "#a855f7", widthPct: 25 }, { color: "#d1d5db", widthPct: 15 }] },
  { id: "MCH-009", name: "Machine\nName", segments: [{ color: "#22d3ee", widthPct: 35 }, { color: "#f97316", widthPct: 10 }, { color: "#a855f7", widthPct: 30 }, { color: "#d1d5db", widthPct: 25 }] },
  { id: "MCH-010", name: "Machine\nName", segments: [{ color: "#22d3ee", widthPct: 20 }, { color: "#d1d5db", widthPct: 10 }, { color: "#a855f7", widthPct: 45 }, { color: "#d1d5db", widthPct: 25 }] },
];


// const statusColors = {
//   active: "#3B82F6", // blue-500
//   idle: "#F59E0B",   // amber-500
//   maintenance: "#8B5CF6", // violet-500
//   error: "#EF4448"   // red-500
// };

// const functionColors = {
//   Cutting: "#06B6D4",
//   Welding: "#F97316",
//   Painting: "#A855F7",
//   Setup: "#64748B",
//   Cooling: "#0EA5E9",
//   Preparation: "#94A3B8",
//   Drying: "#14B8A6",
//   Cleaning: "#84CC16"
// };
export default function MachineChart() {
  const [view, setView] = useState<"chart" | "list">("chart");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl h-[calc(100vh-200px)] flex flex-col custom-scrollbar ">

      {/* Header */}
      

      {/* Scroll Area */}
      <div className="flex-1 overflow-auto p-4 custom-scrollbar">
        {view === "chart" && (
          <div className="space-y-2 min-w-[600px] ">

            {MACHINES.map((machine, mi) => (
              <div key={machine.id} className="flex items-center gap-3 mb-10 ">

                {/* Machine Label */}
                <div className=" font-bold border-gray-200 text-right text-xs text-gray-500 whitespace-pre-line">
                  {machine.name}
                </div>

                {/* Timeline */}
                <div className="flex-1 flex rounded overflow-hidden bg-gray-100 h-6">

                  {machine.segments.map((seg, si) => (
                    <div
                      key={si}
                      className="h-full cursor-pointer transition-all"
                      style={{
                        width: `${seg.widthPct}%`,
                        background: seg.color,
                        opacity: hovered === `${mi}-${si}` ? 0.7 : 1,
                      }}
                      onMouseEnter={() => setHovered(`${mi}-${si}`)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  ))}

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}