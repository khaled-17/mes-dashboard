"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, List, Option } from "lucide-react";
import { NODE_BASE_RESOLVE_OPTIONS } from "next/dist/build/webpack-config";

interface OptionsFilterProps {
  status: string;
  onStatusChange: (status: string) => void;
  materialConsumption: number;
  onMaterialConsumptionChange: (value: number) => void;
  energyConsumption: number;
  onEnergyConsumptionChange: (value: number) => void;
  production: number;
  onProductionChange: (value: number) => void;
  maintenanceStatusCount?: number;
  onMaintenanceStatusChange?: (value: number) => void;
  operator?: string;
  onOperatorChange?: (value: string) => void;
  efficiency?: number;
  onEfficiencyChange?: (value: number) => void;
}

export default function OptionsFilter({
  status,
  onStatusChange,
  materialConsumption,
  onMaterialConsumptionChange,
  energyConsumption,
  onEnergyConsumptionChange,
  production,
  onProductionChange,
  maintenanceStatusCount,
  onMaintenanceStatusChange,
  operator,
  onOperatorChange,
  efficiency,
  onEfficiencyChange,
}: OptionsFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true);



  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-900">Options</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Status Checkboxes */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>

            <div className="flex justify-between items-center gap-2">

              {/* Active */}
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-50 px-2 py-1 rounded">

                <input
                  type="checkbox"
                  checked={status === "active"}
                  onChange={(e) =>
                    onStatusChange(e.target.checked ? "active" : "")
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />

                Active

              </label>

              {/* Inactive */}
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-50 px-2 py-1 rounded">

                <input
                  type="checkbox"
                  checked={status === "inactive"}
                  onChange={(e) =>
                    onStatusChange(e.target.checked ? "inactive" : "")
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />

                Inactive

              </label>

            </div>

          </div>

          {/* Material Consumption Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Material Consumption: {materialConsumption}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={materialConsumption}
              onChange={(e) => onMaterialConsumptionChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Energy Consumption Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Energy Consumption: {energyConsumption}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={energyConsumption}
              onChange={(e) => onEnergyConsumptionChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Production Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Production: {production}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={production}
              onChange={(e) => onProductionChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
