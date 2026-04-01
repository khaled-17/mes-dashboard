"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers, SlidersVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const tabs = ["Function", "Material", "Product"] as const;

const data = {
  Function: ["Function", "Function", "Function", "Function", "Function", "Function", "Function", "Function", "Function", "Function"],
  Material: ["Material 1", "Material 2", "Material 3", "Material 4", "Material 4", "Material 4", "Material 4", "Material 4", "Material 4", "Material 4"],
  Product: ["Product 1", "Product 2", "Product 3", "Product 3", "Product 3", "Product 3", "Product 3", "Product 3", "Product 3", "Product 3"],
};

function SideCard() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof data>("Function");

  const getInitialChecked = (tab: keyof typeof data) =>
    data[tab].map((item, i) => `${item}-${i}`);

  const [checkedItems, setCheckedItems] = useState<string[]>(
    getInitialChecked("Function")
  );

  const handleTabChange = (tab: keyof typeof data) => {
    setActiveTab(tab);
    setCheckedItems(getInitialChecked(tab)); // reset هنا بدل useEffect
  };

  return (
    <div className="flex flex-col gap-8 w-full xl:w-[24rem] xl:shrink-0">
      {/* CARD 1 */}
      <Card className="w-full min-w-0">
        <CardHeader className="px-6 mb-2">
          <CardTitle className="flex items-center gap-3">
            <Layers size={20} />
            <span className="text-lg font-semibold">Layers</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-6 space-y-4">
          {/* fake selects */}
          <div className="space-y-4 mb-10">
            <div className="border-b-4 rounded-md px-3 text-[14px] text-muted-foreground">
              Job Order
            </div>
            <div className="border-b-4 rounded-md px-3 text-[14px] text-muted-foreground">
              Route
            </div>
          </div>

          {/* tabs */}
          <div className="flex bg-muted rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex-1 text-sm font-semibold py-1.5 rounded-md transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-muted-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* checkboxes */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {data[activeTab].map((item, i) => {
              const id = `${item}-${i}`;
              const isChecked = checkedItems.includes(id);

              return (
                <div key={id} className="flex items-center gap-2">
                  <Checkbox
                    id={id}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      setCheckedItems((prev) =>
                        checked
                          ? [...prev, id]
                          : prev.filter((x) => x !== id)
                      );
                    }}
                    className="border-gray-400 data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800"
                  />
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-blue-950"
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* CARD 2 */}
      <Card className="w-full min-w-0">
        <CardHeader className="px-6 mb-2">
          <CardTitle className="flex items-center gap-3">
            <SlidersVertical size={20} />
            <span className="text-lg font-semibold">Options</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 space-y-5">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="active"
                defaultChecked
                className="border-gray-400 data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800"
              />
              <label htmlFor="active" className="text-sm">
                Active
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="inactive"
                className="border-gray-400 data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800"
              />
              <label htmlFor="inactive" className="text-sm">
                Inactive
              </label>
            </div>
          </div>

          <div className="space-y-4">
            {["Material Consumption", "Energy Consumption", "Production"].map(
              (label, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-md font-semibold text-blue-950">
                    {label}
                  </p>
                  <input
                    type="range"
                    className="w-full accent-blue-600"
                  />
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SideCard;