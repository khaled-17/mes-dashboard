"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Layers } from "lucide-react";

interface LayersFilterProps {
  jobOrder: string;
  onJobOrderChange: (value: string) => void;
  route: string;
  onRouteChange: (value: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  functions: Array<{ label: string; checked: boolean }>;
  onFunctionToggle: (label: string, checked: boolean) => void;
}

const defaultFunctions = [
  { label: "Cutting", checked: false },
  { label: "Assembly", checked: false },
  { label: "Welding", checked: false },
  { label: "Painting", checked: false },
  { label: "Testing", checked: false },
  { label: "Packaging", checked: false },
];

export default function LayersFilter({
  jobOrder,
  onJobOrderChange,
  route,
  onRouteChange,
  activeTab,
  onTabChange,
  functions = defaultFunctions,
  onFunctionToggle,
}: LayersFilterProps) {

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white ">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <Layers className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="text-sm font-semibold text-gray-800">
            Layers
          </h3>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>

      </div>

      {/* Content */}
      {isExpanded && (

        <div className="p-4 space-y-5">

          {/* Job Order */}
          <div>

            <label className="text-xs font-medium text-gray-500 block mb-1">
              Job Order
            </label>

            <input
              type="text"
              value={jobOrder}
              onChange={(e) => onJobOrderChange(e.target.value)}
              placeholder="Enter job order..."
              className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Route */}
          <div>

            <label className="text-xs font-medium text-gray-500 block mb-1">
              Route
            </label>

            <input
              type="text"
              value={route}
              onChange={(e) => onRouteChange(e.target.value)}
              placeholder="Enter route..."
              className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Category Tabs */}

          <div>

            <label className="text-xs font-medium text-gray-500 block mb-2">
              Category
            </label>

            <div className="flex w-full bg-gray-100 rounded-lg p-1">

              {["FUNCTION", "MACHINE", "MATERIAL"].map((tab) => (

                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange(tab)}
                  className={`flex-1 text-xs font-semibold py-2 rounded-md transition-all duration-200 cursor-pointer
                  ${activeTab === tab
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {tab}
                </button>

              ))}

            </div>

          </div>

          {/* Functions */}
          <div>

            <label className="text-xs font-medium text-gray-500 block mb-2">
              Functions
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">

              {functions.map((func) => (

                <label
                  key={func.label}
                  className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition"
                >

                  <input
                    type="checkbox"
                    checked={func.checked}
                    onChange={(e) =>
                      onFunctionToggle(func.label, e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />

                  {func.label}

                </label>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}