"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";

interface ViewPropertiesModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

const KPI_OPTIONS = [
  "OEE",
  "Availability",
  "Performance",
  "Quality",
  "Function",
  "Function",
  "Function",
  "Function",
  "Function",
  "Function",
  "Function",
  "Function",
];

const TABS = [
  { id: "kpis", label: "KPIs" },
  { id: "current", label: "CURRENT" },
  { id: "comparison", label: "COMPARISON" },
];

export function ViewPropertiesModal({
  isOpen,
  onClose,
}: ViewPropertiesModalProps) {
  const [activeTab, setActiveTab] = useState("kpis");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1167px] h-[659px] rounded-[20px] p-0 flex flex-col bg-background overflow-hidden border-none shadow-2xl">
        
        {/* Header */}
        <DialogHeader className="flex flex-row items-center gap-3 px-10 h-[75px] border-b border-border flex-none space-y-0">
          <Eye className="w-5 h-5 text-muted-foreground" />
          <DialogTitle className="text-[12px] font-bold tracking-[0.15em] text-muted-foreground uppercase font-sans">
            VIEW PROPERTIES
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col items-center pt-16 px-20 font-sans">

          <div className="flex w-[417px] h-[48px] p-[4px] mb-20 bg-white  shadow-[1px_2px_6px_rgba(0,0,0,0.11)] rounded-[8px] p-[2px]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-[12px] text-[14px] font-semibold tracking-[0.15em] uppercase transition-all
                ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-[#4F6F82]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-x-28 gap-y-9 w-[509px]">
            {KPI_OPTIONS.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Checkbox id={`kpi-${index}`} />
                <label
                  htmlFor={`kpi-${index}`}
                  className="text-[14px] font-medium text-label-black tracking-[0.02em] leading-[18px] cursor-pointer select-none"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="h-[120px] flex flex-row items-center justify-end px-16 gap-5 bg-background border-none">
          <Button
            variant="outline"
            onClick={() => onClose(false)}
            className="h-[45px] w-[160px] text-[13px] font-bold text-primary border-primary rounded-[8px] uppercase hover:bg-primary/5 transition-all"
          >
            CANCEL
          </Button>

          <Button className="h-[45px] w-[160px] text-[13px] font-bold bg-primary text-white rounded-[8px] shadow-lg hover:opacity-90 uppercase transition-all">
            SAVE UPDATE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}