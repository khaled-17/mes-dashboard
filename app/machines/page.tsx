"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ViewPropertiesModal } from "@/components/modals/view-properties-modal";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Machines() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">

      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "w-[190px] h-[38px] px-0 py-0",
          "bg-primary text-white rounded-md shadow-sm border-none",
          "flex items-center justify-center gap-[10px]",
          "hover:opacity-90 transition-opacity cursor-pointer",
        )}
        style={{
          boxShadow: "0px 3px 6px #00000029",
        }}
      >
        <Eye className="w-[17px] h-[11px] text-white stroke-[2px]" />

        <span
          className={cn(
            "text-[14px] font-medium leading-[18px] tracking-[0.02em]",
            "font-sans text-white uppercase",
          )}
        >
          View Properties
        </span>
      </Button>

      <ViewPropertiesModal isOpen={isOpen} onClose={setIsOpen} />
    </main>
  );
}
